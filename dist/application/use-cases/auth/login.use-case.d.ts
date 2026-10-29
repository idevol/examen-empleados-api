import { JwtService } from "@nestjs/jwt";
import { type IUsuarioRepository } from "../../../domain/repositories/usuario.repository.interface";
export interface LoginInput {
    usuario: string;
    password: string;
}
export declare class LoginUseCase {
    private readonly usuarioRepository;
    private readonly jwtService;
    constructor(usuarioRepository: IUsuarioRepository, jwtService: JwtService);
    execute(input: LoginInput): Promise<{
        access_token: string;
        token: string;
        usuario: string;
        rol: import("../../../domain/enums/rol.enum").Rol;
    }>;
}
