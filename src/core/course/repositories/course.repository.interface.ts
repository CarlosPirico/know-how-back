import { Course } from "../entities/course.entity";

export interface ICourseRepository {
  create(course: Course): Promise<Course>;
  findById(id: number): Promise<Course | null>;
}
