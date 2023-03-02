import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ReqBody } from 'src/core/auth.dto';

@Injectable()
export class AuthService {

    handleLogin(dto: ReqBody) {
        if(dto.username === 'kingsley@gmail.com' && dto.password == '12345'){
            return {
                message: 'Login successful',
                token: Date.now()+ Buffer.from(dto.username).toString('base64')
            }
        }
        throw new UnauthorizedException('Username/Password is incorrect');
    }
}
