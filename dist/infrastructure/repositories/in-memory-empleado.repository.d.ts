import { Empleado } from '../../domain/entities/empleado.entity';
import { CrearEmpleadoDatos, IEmpleadoRepository } from '../../domain/repositories/empleado.repository.interface';
export declare class InMemoryEmpleadoRepository implements IEmpleadoRepository {
    private empleados;
    private nextId;
    findAll(): Promise<Empleado[]>;
    findById(id: number): Promise<Empleado | null>;
    create(datos: CrearEmpleadoDatos): Promise<Empleado>;
    updateEstado(id: number, activo: boolean): Promise<Empleado | null>;
}
