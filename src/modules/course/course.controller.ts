import { Controller, Param, Get } from "@nestjs/common";
import { CourseService } from "@/core/course/services/course.services";
import { GetCourseDto } from "@/core/course/dtos";
import { Course } from "@/core/course/entities/course.entity";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";

@Controller("course")
export class CourseController {
  constructor(private readonly CourseService: CourseService) {}

  @Get(":id")
  @ApiOperation({ summary: "Buscar Curso por ID" })
  @ApiResponse({ status: 200, description: "Curso encontrado", type: Course })
  @ApiResponse({ status: 404, description: "Curso não encontrado" })
  async exercisebyId(@Param() Param: GetCourseDto) {
    return this.CourseService.findById(Param.id);
  }

}
