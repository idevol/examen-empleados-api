import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CambiarEstadoDto {
  @IsBoolean({ message: 'activo debe ser un valor booleano (true o false)' })
  @IsNotEmpty({ message: 'activo es obligatorio' })
  activo: boolean;
}