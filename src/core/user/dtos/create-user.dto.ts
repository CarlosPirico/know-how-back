import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "John Doe" })
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: "usuario@dominio.com.br" })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: "senha123" })
  @IsNotEmpty()
  @MinLength(6)
  senha: string;
}
