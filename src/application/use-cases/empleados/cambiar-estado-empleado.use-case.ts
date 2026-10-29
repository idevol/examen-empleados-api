import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Empleado } from '../../../domain/entities/empleado.entity';
import {
  EMPLEADO_REPOSITORY,
  type IEmpleadoRepository,
} from '../../../domain/repositories/empleado.repository.interface';

@Injectable()
export class CambiarEstadoEmpleadoUseCase {
  constructor(
    @Inject(EMPLEADO_REPOSITORY)
    private readonly empleadoRepository: IEmpleadoRepository,
  ) {}

  async execute(id: number, activo: boolean): Promise<Empleado> {
    const actualizado = await this.empleadoRepository.updateEstado(id, activo);
    if (!actualizado) {
      throw new NotFoundException(`El empleado con id ${id} no existe`);
    }
    return actualizado;
  }
}