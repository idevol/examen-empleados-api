import { Area } from '../enums/area.enum';
import { Genero } from '../enums/genero.enum';
export type EstadoEmpleado = 'Activo' | 'Inactivo';
export interface EmpleadoProps {
    id: number;
    nombreCompleto: string;
    area: Area;
    puesto: string;
    genero: Genero;
    fechaEntrada: string;
    fechaNacimiento: string;
    activo?: boolean;
}
export declare class Empleado {
    readonly id: number;
    nombreCompleto: string;
    area: Area;
    puesto: string;
    genero: Genero;
    fechaEntrada: string;
    fechaNacimiento: string;
    activo?: boolean;
    estado: EstadoEmpleado;
    constructor(props: EmpleadoProps);
    cambiarEstado(activo: boolean): void;
    private calcularEstado;
}
