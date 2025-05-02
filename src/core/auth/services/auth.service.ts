import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@/core/user/services/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string) {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(senha, user.password))) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }

  async login(email: string, senha: string) {
    const user = await this.userService.findByEmail(email);
    if (!user || !(await bcrypt.compare(senha, user.password))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
