import { LoginUseCase } from '../../application/use-cases/auth/login.use-case';
import { LoginDto } from '../dtos/login.dto';
export declare class AuthController {
    private readonly loginUseCase;
    constructor(loginUseCase: LoginUseCase);
    login(body: LoginDto): Promise<{
        access_token: string;
        token: string;
        usuario: string;
        rol: import("../../domain/enums/rol.enum").Rol;
    }>;
}
