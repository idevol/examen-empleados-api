import { Empleado } from '../../../domain/entities/empleado.entity';
import { type IEmpleadoRepository } from '../../../domain/repositories/empleado.repository.interface';
export declare class CambiarEstadoEmpleadoUseCase {
    private readonly empleadoRepository;
    constructor(empleadoRepository: IEmpleadoRepository);
    execute(id: number, activo: boolean): Promise<Empleado>;
}
