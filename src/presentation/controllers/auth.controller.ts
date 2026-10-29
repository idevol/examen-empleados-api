import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LoginUseCase } from '../../application/use-cases/auth/login.use-case';
import { LoginDto } from '../dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: LoginDto) {
    const usuario = body.usuario ?? body.username;
    const password =
      body.password ?? body.contrasena ?? body['contraseña'];

    const errores: string[] = [];
    if (!usuario || usuario.trim() === '') {
      errores.push('usuario es obligatorio');
    }
    if (!password || password.trim() === '') {
      errores.push('password es obligatorio');
    }

    if (errores.length > 0) {
      throw new BadRequestException(errores);
    }

    return this.loginUseCase.execute({
      usuario: usuario!,
      password: password!,
    });
  }
}