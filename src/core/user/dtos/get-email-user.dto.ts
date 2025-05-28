import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class GetEmailUserDto {
  @ApiProperty({ example: "usuario@dominio.com.br" })
  @IsEmail()
  email: string;
}
