import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.userService.findUserByUsername(username);
    if (user) {
      const isPasswordMatching = await this.userService.comparePasswords(
        pass,
        user.password,
      );
      if (isPasswordMatching) {
        const payload = { username: user.username, sub: user.id };
        const access_token = await this.jwtService.signAsync(payload);
        return {
          ...payload,
          access_token: access_token,
        };
      }
    }
  }
}
