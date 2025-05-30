import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateCourseDto {
  @ApiProperty({ example: "Progamação Orientada a Objeto" })
  @IsNotEmpty()
  nome: string;
}
