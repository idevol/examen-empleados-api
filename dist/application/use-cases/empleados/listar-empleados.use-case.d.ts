import { Empleado } from '../../../domain/entities/empleado.entity';
import { type IEmpleadoRepository } from '../../../domain/repositories/empleado.repository.interface';
export declare class ListarEmpleadosUseCase {
    private readonly empleadoRepository;
    constructor(empleadoRepository: IEmpleadoRepository);
    execute(): Promise<Empleado[]>;
}
