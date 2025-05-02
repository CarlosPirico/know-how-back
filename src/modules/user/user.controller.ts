import { Body, Param, Controller, Post, Get, NotFoundException, UseGuards } from '@nestjs/common';
import { UserService } from '@/core/user/services/user.service';
import { CreateUserDto, GetEmailUserDto, GetUserDto } from '@/core/user/dtos/';
import { User } from '@/core/user/entities/user.entity';
import { JwtAuthGuard } from '@/core/auth/services/jwt-auth.guard';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() body: CreateUserDto): Promise<User> {
        return this.userService.create(body);
    }

    @Get('email/:email')
    async findByEmail(@Param() Param: GetEmailUserDto): Promise<User> {
        const user = await this.userService.findByEmail(Param.email);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findById(@Param() Param: GetUserDto): Promise<User> {
        const user = await this.userService.findById(Param.id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}
