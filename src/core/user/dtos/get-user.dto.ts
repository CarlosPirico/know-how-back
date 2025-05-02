import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUserDto {
    @Type(() => Number)
    @IsInt()
    id: number;
}