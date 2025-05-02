// src/core/user/services/user.service.ts
import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/create-user.dto';
import { IUserRepository } from '../repositories/user.repository.interface';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
    ) {}

    async create(data: CreateUserDto): Promise<User> {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(data.senha, saltOrRounds);

        const user = new User();
        user.name = data.nome;
        user.email = data.email;
        user.password = hashedPassword;

        return this.userRepository.create(user);
    }
     
    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findByEmail(email);
    }

    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.findByEmail(email);
        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        }
        return null;
    }

    async findById(id: number): Promise<User | null> {
        return this.userRepository.findById(id);
    }
}
