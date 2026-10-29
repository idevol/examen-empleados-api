import { Injectable } from '@nestjs/common';
import { Empleado } from '../../domain/entities/empleado.entity';
import { Area } from '../../domain/enums/area.enum';
import { Genero } from '../../domain/enums/genero.enum';
import {
  CrearEmpleadoDatos,
  IEmpleadoRepository,
} from '../../domain/repositories/empleado.repository.interface';

@Injectable()
export class InMemoryEmpleadoRepository implements IEmpleadoRepository {
  private empleados: Empleado[] = [
    new Empleado({
      id: 1,
      nombreCompleto: 'Carlos Mendoza García',
      area: Area.TECNOLOGIA,
      puesto: 'Arquitecto de Software',
      genero: Genero.MASCULINO,
      fechaEntrada: '2022-03-15',
      fechaNacimiento: '1988-07-22',
      activo: true,
    }),
    new Empleado({
      id: 2,
      nombreCompleto: 'Ana Sofía Torres Hernández',
      area: Area.RECURSOS_HUMANOS,
      puesto: 'Especialista de Atracción de Talento',
      genero: Genero.FEMENINO,
      fechaEntrada: '2023-01-10',
      fechaNacimiento: '1993-11-05',
      activo: true,
    }),
    new Empleado({
      id: 3,
      nombreCompleto: 'Roberto Sánchez Vega',
      area: Area.FINANZAS,
      puesto: 'Analista Financiero Senior',
      genero: Genero.MASCULINO,
      fechaEntrada: '2021-06-01',
      fechaNacimiento: '1990-02-14',
      activo: true,
    }),
    new Empleado({
      id: 4,
      nombreCompleto: 'Laura Patricia Gómez Díaz',
      area: Area.OPERACIONES,
      puesto: 'Coordinadora de Operaciones',
      genero: Genero.FEMENINO,
      fechaEntrada: '2020-09-20',
      fechaNacimiento: '1985-12-30',
      activo: false,
    }),
    new Empleado({
      id: 5,
      nombreCompleto: 'Alex Rivera Morales',
      area: Area.VENTAS,
      puesto: 'Ejecutivo de Cuentas Clave',
      genero: Genero.OTRO,
      fechaEntrada: '2024-02-01',
      fechaNacimiento: '1996-04-18',
      activo: true,
    }),
  ];

  private nextId = 6;

  async findAll(): Promise<Empleado[]> {
    return [...this.empleados];
  }

  async findById(id: number): Promise<Empleado | null> {
    const empleado = this.empleados.find((e) => e.id === id);
    return empleado ?? null;
  }

  async create(datos: CrearEmpleadoDatos): Promise<Empleado> {
    const nuevoEmpleado = new Empleado({
      id: this.nextId++,
      ...datos,
      activo: true,
    });
    this.empleados.push(nuevoEmpleado);
    return nuevoEmpleado;
  }

  async updateEstado(id: number, activo: boolean): Promise<Empleado | null> {
    const empleado = this.empleados.find((e) => e.id === id);
    if (!empleado) {
      return null;
    }
    empleado.cambiarEstado(activo);
    return empleado;
  }
}