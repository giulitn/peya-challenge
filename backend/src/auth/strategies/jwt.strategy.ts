import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // Just for testing purposes
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  /**
    Extracts the user ID and email from the JWT payload.
    @param payload - The JWT payload.
    @returns An object containing the user ID and email.
 */
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
