import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @ApiProperty()
    name:string;
}