import { IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class GetUserDto {
  @ApiProperty({ example: 123 })
  @Type(() => Number)
  @IsInt()
  id: number;
}
