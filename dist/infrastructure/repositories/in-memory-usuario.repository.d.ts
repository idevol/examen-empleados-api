import { Usuario } from '../../domain/entities/usuario.entity';
import { IUsuarioRepository } from '../../domain/repositories/usuario.repository.interface';
export declare class InMemoryUsuarioRepository implements IUsuarioRepository {
    private readonly usuarios;
    findByUsername(username: string): Promise<Usuario | null>;
}
