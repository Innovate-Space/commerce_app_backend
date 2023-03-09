import { Injectable } from '@nestjs/common';
import { ReqBody } from 'src/core/auth.dto';
import * as fs from 'fs';

interface User {
  username: string;
  password: string;
  token: string;
}

@Injectable()
export class AuthService {
  handleLogin(dto: ReqBody) {
    const data = fs.readFileSync(
      __dirname + '/../../../src/feature/auth/model/users.json',
      'utf8',
    );
    const users: User[] = JSON.parse(data);

    const currentUser = users.find(
      (u) => u.username === dto.username && u.password === dto.password,
    );
    delete currentUser.username;
    delete currentUser.password;
    return currentUser;

    // if(dto.username === 'kingsley@gmail.com' && dto.password == '12345'){
    //     return {
    //         message: 'Login successful',
    //         token: Date.now()+ Buffer.from(dto.username).toString('base64')
    //     }
    // }
    // throw new UnauthorizedException('Username/Password is incorrect');
  }
}
// https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/introduction
