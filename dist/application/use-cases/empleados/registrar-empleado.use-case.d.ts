import { Empleado } from '../../../domain/entities/empleado.entity';
import { CrearEmpleadoDatos, type IEmpleadoRepository } from '../../../domain/repositories/empleado.repository.interface';
export declare class RegistrarEmpleadoUseCase {
    private readonly empleadoRepository;
    constructor(empleadoRepository: IEmpleadoRepository);
    execute(datos: CrearEmpleadoDatos): Promise<Empleado>;
}
