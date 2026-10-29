import { Empleado } from '../entities/empleado.entity';
import { Area } from '../enums/area.enum';
import { Genero } from '../enums/genero.enum';

export interface CrearEmpleadoDatos {
    nombreCompleto: string;
    area: Area;
    puesto: string;
    genero: Genero;
    fechaEntrada: string;
    fechaNacimiento: string;
 }

export const EMPLEADO_REPOSITORY = Symbol('EMPLEADO_REPOSITORY');

export interface IEmpleadoRepository {
    findAll(): Promise<Empleado[]>;
    findById(id: number): Promise<Empleado | null>;
    create(datos: CrearEmpleadoDatos): Promise<Empleado>;
    updateEstado(id: number, activo: boolean): Promise<Empleado | null>;
}