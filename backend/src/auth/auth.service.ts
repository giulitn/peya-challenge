import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async register(body: CreateUserDto): Promise<User> {
    const { email } = body;

    // Is email already registered?
    const emailAlreadyRegistered = await this.userModel.findOne({ email });
    if (emailAlreadyRegistered) {
      throw new ConflictException('Email already registered');
    }

    const newUser = new this.userModel(body);
    try {
      await newUser.save();
    } catch (error) {
      throw new BadRequestException('Please check if data is complete');
    }

    return newUser;
  }

  async login(body: LoginUserDto) {
    const { email, password } = body;

    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
