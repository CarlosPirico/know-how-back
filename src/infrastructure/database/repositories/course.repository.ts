import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Course } from "@/core/course/entities/course.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { ICourseRepository } from "@/core/course/repositories/course.repository.interface";

@Injectable()
export class CourseRepository implements ICourseRepository {
  constructor(
    @InjectRepository(Course)
    private readonly repo: Repository<Course>,
  ) {}

  async create(course: Course): Promise<Course> {
    return this.repo.save(course);
  }

  async findById(id: number): Promise<Course | null> {
    return this.repo.findOne({ where: { id } });
  }
}
