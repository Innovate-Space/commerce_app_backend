import { Body, Controller, Post } from '@nestjs/common';
import { ReqBody } from 'src/core/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    loginUser(@Body() dto: ReqBody) {
        return this.authService.handleLogin(dto);
    }
}
