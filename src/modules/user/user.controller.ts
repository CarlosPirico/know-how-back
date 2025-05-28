import {
  Body,
  Param,
  Controller,
  Post,
  Get,
  NotFoundException,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "@/core/user/services/user.service";
import { CreateUserDto, GetEmailUserDto, GetUserDto } from "@/core/user/dtos/";
import { User } from "@/core/user/entities/user.entity";
import { JwtAuthGuard } from "@/core/auth/services/jwt-auth.guard";
import {
  // ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";

@ApiTags("Usuários")
// @ApiBearerAuth() // retirado para a Tay consumir sem autenticação
@Controller("users")
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.create(body);
  }

  @Get("email/:email")
  async findByEmail(@Param() Param: GetEmailUserDto): Promise<User> {
    const user = await this.userService.findByEmail(Param.email);
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return user;
  }

  @Get(":id")
  @ApiOperation({ summary: "Buscar usuário por ID" })
  @ApiResponse({ status: 200, description: "Usuário encontrado", type: User })
  @ApiResponse({ status: 404, description: "Usuário não encontrado" })
  async findById(@Param() Param: GetUserDto): Promise<User> {
    const user = await this.userService.findById(Param.id);
    if (!user) {
      throw new NotFoundException("User not found");
    }
    return user;
  }
}
