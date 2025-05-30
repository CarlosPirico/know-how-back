import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CourseController } from "./course.controller";
import { CourseService } from "@/core/course/services/course.services";
import { Course } from "@/core/course/entities/course.entity";
import { CourseRepository } from "@/infrastructure/database/repositories/course.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CourseController],
  providers: [
    CourseService,
    {
      provide: "ICourseRepository",
      useClass: CourseRepository,
    },
  ],
  exports: [CourseService],
})
export class CourseModule {}
