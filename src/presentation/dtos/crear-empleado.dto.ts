import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';
import { Area } from '../../domain/enums/area.enum';
import { Genero } from '../../domain/enums/genero.enum';

export class CrearEmpleadoDto {
  @IsString({ message: 'nombreCompleto debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'nombreCompleto es obligatorio' })
  nombreCompleto: string;

  @IsEnum(Area, {
    message:
      'area debe ser uno de los siguientes valores: TECNOLOGIA, RECURSOS_HUMANOS, FINANZAS, OPERACIONES, VENTAS, ADMINISTRACION',
  })
  @IsNotEmpty({ message: 'area es obligatorio' })
  area: Area;

  @IsString({ message: 'puesto debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'puesto es obligatorio' })
  puesto: string;

  @IsEnum(Genero, {
    message: 'genero debe ser uno de los siguientes valores: MASCULINO, FEMENINO, OTRO',
  })
  @IsNotEmpty({ message: 'genero es obligatorio' })
  genero: Genero;

  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'fechaEntrada debe tener el formato YYYY-MM-DD',
  })
  @IsDateString(
    { strict: true },
    { message: 'fechaEntrada debe ser una fecha válida en formato YYYY-MM-DD' },
  )
  @IsNotEmpty({ message: 'fechaEntrada es obligatorio' })
  fechaEntrada: string;

  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'fechaNacimiento debe tener el formato YYYY-MM-DD',
  })
  @IsDateString(
    { strict: true },
    {
      message: 'fechaNacimiento debe ser una fecha válida en formato YYYY-MM-DD',
    },
  )
  @IsNotEmpty({ message: 'fechaNacimiento es obligatorio' })
  fechaNacimiento: string;
}