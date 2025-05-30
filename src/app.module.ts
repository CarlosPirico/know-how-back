import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./modules/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "@/modules/auth/auth.module";
import { CourseModule } from "./modules/course/course.module";
import { ExerciseModule } from "./modules/exercise/exercise.module";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "knowhow123",
      database: "master",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    AuthModule,
    CourseModule,
    ExerciseModule, // Assuming ExerciseModule is defined similarly to CourseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
