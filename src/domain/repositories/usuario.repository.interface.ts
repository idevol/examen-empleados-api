import { Usuario } from '../entities/usuario.entity';

export const USUARIO_REPOSITORY = Symbol('USUARIO_REPOSITORY');

export interface IUsuarioRepository {
  findByUsername(username: string): Promise<Usuario | null>;
}