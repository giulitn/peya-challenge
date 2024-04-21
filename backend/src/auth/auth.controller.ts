import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Registra un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario registrado exitosamente.' })
  @ApiResponse({
    status: 409,
    description: 'Datos inválidos o email ya registrado.',
  })
  async register(@Body() payload: CreateUserDto) {
    return this.authService.register(payload);
  }
  @Post('login')
  @ApiOperation({ summary: 'Inicia sesión' })
  @ApiResponse({
    status: 200,
    description: 'Usuario autenticado exitosamente.',
  })
  @ApiResponse({ status: 401, description: 'Credenciales incorrectas.' })
  async login(@Body() payload: LoginUserDto) {
    return this.authService.login(payload);
  }

  @ApiOperation({ summary: 'Obtiene información de la sesión actual' })
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Request() req) {
    return req.user;
  }
}
