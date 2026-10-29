import { Inject, Injectable } from '@nestjs/common';
import { Empleado } from '../../../domain/entities/empleado.entity';
import {
  CrearEmpleadoDatos,
  EMPLEADO_REPOSITORY,
  type IEmpleadoRepository,
} from '../../../domain/repositories/empleado.repository.interface';

@Injectable()
export class RegistrarEmpleadoUseCase {
  constructor(
    @Inject(EMPLEADO_REPOSITORY)
    private readonly empleadoRepository: IEmpleadoRepository,
  ) {}

  async execute(datos: CrearEmpleadoDatos): Promise<Empleado> {
    return this.empleadoRepository.create(datos);
  }
}