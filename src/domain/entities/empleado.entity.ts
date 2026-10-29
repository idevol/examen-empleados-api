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

export class Empleado {
    public readonly id: number;
    public nombreCompleto: string;
    public area: Area;
    public puesto: string;
    public genero: Genero;
    public fechaEntrada: string;
    public fechaNacimiento: string;
    public activo?: boolean;
    public estado: EstadoEmpleado;

    constructor(props: EmpleadoProps) {
        this.id = props.id;
        this.nombreCompleto = props.nombreCompleto;
        this.area = props.area;
        this.puesto = props.puesto;
        this.genero = props.genero;
        this.fechaEntrada = props.fechaEntrada;
        this.fechaNacimiento = props.fechaNacimiento;
        const activo = props.activo ?? true;
        this.activo = activo;
        this.estado = this.calcularEstado(activo);
    }

    public cambiarEstado(activo: boolean): void {
        this.activo = activo;
        this.estado = this.calcularEstado(activo);
    }

    private calcularEstado(activo: boolean): EstadoEmpleado {
        return activo ? 'Activo' : 'Inactivo';
    }
}