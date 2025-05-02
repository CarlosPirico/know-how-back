import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '@/core/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from '@/core/user/repositories/user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(User)
        private readonly repo: Repository<User>,
    ) { }

    async create(user: User): Promise<User> {
        return this.repo.save(user);
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.repo.findOne({ where: { email } });
    }

    async findById(id: number): Promise<User | null> {
        return this.repo.findOne({ where: { id } });
    }
}
