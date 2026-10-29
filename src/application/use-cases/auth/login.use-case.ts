import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {
    USUARIO_REPOSITORY,
    type IUsuarioRepository,
} from "../../../domain/repositories/usuario.repository.interface";

export interface LoginInput {
    usuario: string;
    password: string;
}

@Injectable()
export class LoginUseCase {
    constructor(
        @Inject(USUARIO_REPOSITORY)
        private readonly usuarioRepository: IUsuarioRepository,
        private readonly jwtService: JwtService,
    ) {}

    async execute(input: LoginInput) {
        const user = await this.usuarioRepository.findByUsername(input.usuario);

        if (!user || user.password !== input.password) {
            throw new UnauthorizedException("Usuario o contraseña incorrectos");
        }

        const payload = {
            sub: user.username,
            usuario: user.username,
            rol: user.rol,
        };

        const token = await this.jwtService.signAsync(payload);

        return {
            access_token: token,
            token,
            usuario: user.username,
            rol: user.rol,
        };
    }
}