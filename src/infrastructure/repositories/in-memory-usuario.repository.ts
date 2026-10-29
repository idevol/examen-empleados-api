import { Injectable } from '@nestjs/common';
import { Usuario } from '../../domain/entities/usuario.entity';
import { Rol } from '../../domain/enums/rol.enum';
import { IUsuarioRepository } from '../../domain/repositories/usuario.repository.interface';

@Injectable()
export class InMemoryUsuarioRepository implements IUsuarioRepository {
  private readonly usuarios: Usuario[] = [
    new Usuario('admin', 'Admin123!', Rol.ADMIN),
    new Usuario('consulta', 'Consulta123!', Rol.CONSULTA),
  ];

  async findByUsername(username: string): Promise<Usuario | null> {
    const usuario = this.usuarios.find((u) => u.username === username);
    return usuario ?? null;
  }
}