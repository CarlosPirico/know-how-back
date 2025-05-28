import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "@/core/auth/services/auth.service";
import { LoginDto } from "@/core/auth/dtos/login.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }
}
