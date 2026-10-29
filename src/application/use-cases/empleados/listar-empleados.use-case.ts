import { Inject, Injectable } from '@nestjs/common';
import { Empleado } from '../../../domain/entities/empleado.entity';
import {
  EMPLEADO_REPOSITORY,
  type IEmpleadoRepository,
} from '../../../domain/repositories/empleado.repository.interface';

@Injectable()
export class ListarEmpleadosUseCase {
  constructor(
    @Inject(EMPLEADO_REPOSITORY)
    private readonly empleadoRepository: IEmpleadoRepository,
  ) {}

  async execute(): Promise<Empleado[]> {
    return this.empleadoRepository.findAll();
  }
}