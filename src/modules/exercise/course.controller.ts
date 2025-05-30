import { Body, Controller, Post, Get } from "@nestjs/common";
import { CourseService } from "@/core/course/services/course.service";
import { LoginDto } from "@/core/auth/dtos/login.dto";

@Controller("course")
export class CourseController {
  constructor(private readonly CourseService: CourseService) {}

  @Get(":course/exercise/:exerciseId")
  async exercisebyId(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }
}
