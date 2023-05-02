import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ReqBody } from 'src/core/auth.dto';
import * as fs from 'fs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
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

  async createAccount(dto: User) {
    const user = await this.prismaService.user.findFirst({
      where: { email: dto.email },
    });

    if (user) {
      throw new ForbiddenException('Email is already taken');
    }
    const hashedPassword = await argon2.hash(dto.password);
    // await this.prismaService.user.create()
    return {
      rawPassword: dto.password,
      hashedPassword: hashedPassword,
    };
  }
}
// https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/introduction
