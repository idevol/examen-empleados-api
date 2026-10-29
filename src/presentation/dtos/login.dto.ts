import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsOptional()
  @IsString({ message: 'usuario debe ser una cadena de texto' })
  usuario?: string;

  @IsOptional()
  @IsString({ message: 'username debe ser una cadena de texto' })
  username?: string;

  @IsOptional()
  @IsString({ message: 'password debe ser una cadena de texto' })
  password?: string;

  @IsOptional()
  @IsString({ message: 'contrasena debe ser una cadena de texto' })
  contrasena?: string;

  @IsOptional()
  @IsString({ message: 'contraseña debe ser una cadena de texto' })
  ['contraseña']?: string;
}