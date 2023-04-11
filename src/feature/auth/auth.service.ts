import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ReqBody } from 'src/core/auth.dto';
import * as fs from 'fs';
import { User } from './model/user';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  authenticateUser(dto: ReqBody) {
    const data = fs.readFileSync(
      __dirname + '/../../../src/feature/auth/model/users.json',
      'utf8',
    );
    const users: User[] = JSON.parse(data);
    const currentUser = users.find(
      (u) => u.username === dto.username && u.password === dto.password,
    );
    if (!currentUser)
      throw new UnauthorizedException('Email or pssword is wrong sucker');

    delete currentUser.password;
    return currentUser;
  }

  handleLogin(user: User) {
    console.log(user);
    return {
      ...user,
      token: this.jwtService.sign(
        {
          username: user.username,
          id: user.id,
          typeOfChicken: 'Hen and men',
          ppp: 'Onyeka',
        },
        { secret: this.configService.get('ACCESS_JWT') },
      ),
    };
  }
}
// https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/introduction
