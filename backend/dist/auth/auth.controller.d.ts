import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(payload: CreateUserDto): Promise<import("../user/user.schema").User>;
    login(payload: LoginUserDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<any>;
}
