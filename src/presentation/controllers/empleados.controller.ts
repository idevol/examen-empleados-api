import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ListarEmpleadosUseCase } from '../../application/use-cases/empleados/listar-empleados.use-case';
import { RegistrarEmpleadoUseCase } from '../../application/use-cases/empleados/registrar-empleado.use-case';
import { CambiarEstadoEmpleadoUseCase } from '../../application/use-cases/empleados/cambiar-estado-empleado.use-case';
import { Rol } from '../../domain/enums/rol.enum';
import { Roles } from '../decorators/roles.decorator';
import { CambiarEstadoDto } from '../dtos/cambiar-estado.dto';
import { CrearEmpleadoDto } from '../dtos/crear-empleado.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';

@Controller('empleados')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmpleadosController {
  constructor(
    private readonly listarEmpleadosUseCase: ListarEmpleadosUseCase,
    private readonly registrarEmpleadoUseCase: RegistrarEmpleadoUseCase,
    private readonly cambiarEstadoEmpleadoUseCase: CambiarEstadoEmpleadoUseCase,
  ) {}

  @Get()
  @Roles(Rol.ADMIN, Rol.CONSULTA)
  async listar() {
    return this.listarEmpleadosUseCase.execute();
  }

  @Post()
  @Roles(Rol.ADMIN)
  async registrar(@Body() dto: CrearEmpleadoDto) {
    return this.registrarEmpleadoUseCase.execute(dto);
  }

  @Patch(':id/estado')
  @Roles(Rol.ADMIN)
  async cambiarEstado(
    @Param('id') idParam: string,
    @Body() dto: CambiarEstadoDto,
  ) {
    const id = Number(idParam);
    if (Number.isNaN(id) || !Number.isInteger(id) || id <= 0) {
      throw new BadRequestException('El parámetro id debe ser un número entero válido');
    }
    return this.cambiarEstadoEmpleadoUseCase.execute(id, dto.activo);
  }
}