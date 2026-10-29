import { Usuario } from '../entities/usuario.entity';
export declare const USUARIO_REPOSITORY: unique symbol;
export interface IUsuarioRepository {
    findByUsername(username: string): Promise<Usuario | null>;
}
