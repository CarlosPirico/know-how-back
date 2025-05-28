import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./user.controller";
import { UserService } from "@/core/user/services/user.service";
import { User } from "@/core/user/entities/user.entity";
import { UserRepository } from "@/infrastructure/database/repositories/user.repository";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: "IUserRepository",
      useClass: UserRepository,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
