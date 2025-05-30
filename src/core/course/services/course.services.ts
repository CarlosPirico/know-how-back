import { Inject, Injectable } from "@nestjs/common";
import { CreateCourseDto } from "../dtos/create-course.dto";
import { ICourseRepository } from "../repositories/course.repository.interface";
import { Course } from "../entities/course.entity";

@Injectable()
export class CourseService {
  constructor(
    @Inject("ICourseRepository")
    private readonly courseRepository: ICourseRepository,
  ) {}

  async create(data: CreateCourseDto): Promise<Course> {
    const course = new Course();
    course.name = data.nome;

    return this.courseRepository.create(course);
  }

  async findById(id: number): Promise<Course | null> {
    return this.courseRepository.findById(id);
  }
}
