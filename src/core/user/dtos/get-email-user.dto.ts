import { IsEmail } from 'class-validator';

export class GetEmailUserDto {
    @IsEmail()
    email: string;
}