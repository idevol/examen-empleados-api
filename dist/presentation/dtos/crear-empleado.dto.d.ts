import { Area } from '../../domain/enums/area.enum';
import { Genero } from '../../domain/enums/genero.enum';
export declare class CrearEmpleadoDto {
    nombreCompleto: string;
    area: Area;
    puesto: string;
    genero: Genero;
    fechaEntrada: string;
    fechaNacimiento: string;
}
