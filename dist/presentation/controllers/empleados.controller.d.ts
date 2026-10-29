import { ListarEmpleadosUseCase } from '../../application/use-cases/empleados/listar-empleados.use-case';
import { RegistrarEmpleadoUseCase } from '../../application/use-cases/empleados/registrar-empleado.use-case';
import { CambiarEstadoEmpleadoUseCase } from '../../application/use-cases/empleados/cambiar-estado-empleado.use-case';
import { CambiarEstadoDto } from '../dtos/cambiar-estado.dto';
import { CrearEmpleadoDto } from '../dtos/crear-empleado.dto';
export declare class EmpleadosController {
    private readonly listarEmpleadosUseCase;
    private readonly registrarEmpleadoUseCase;
    private readonly cambiarEstadoEmpleadoUseCase;
    constructor(listarEmpleadosUseCase: ListarEmpleadosUseCase, registrarEmpleadoUseCase: RegistrarEmpleadoUseCase, cambiarEstadoEmpleadoUseCase: CambiarEstadoEmpleadoUseCase);
    listar(): Promise<import("../../domain/entities/empleado.entity").Empleado[]>;
    registrar(dto: CrearEmpleadoDto): Promise<import("../../domain/entities/empleado.entity").Empleado>;
    cambiarEstado(idParam: string, dto: CambiarEstadoDto): Promise<import("../../domain/entities/empleado.entity").Empleado>;
}
