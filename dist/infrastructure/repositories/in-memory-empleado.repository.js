"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryEmpleadoRepository = void 0;
const common_1 = require("@nestjs/common");
const empleado_entity_1 = require("../../domain/entities/empleado.entity");
const area_enum_1 = require("../../domain/enums/area.enum");
const genero_enum_1 = require("../../domain/enums/genero.enum");
let InMemoryEmpleadoRepository = class InMemoryEmpleadoRepository {
    empleados = [
        new empleado_entity_1.Empleado({
            id: 1,
            nombreCompleto: 'Carlos Mendoza García',
            area: area_enum_1.Area.TECNOLOGIA,
            puesto: 'Arquitecto de Software',
            genero: genero_enum_1.Genero.MASCULINO,
            fechaEntrada: '2022-03-15',
            fechaNacimiento: '1988-07-22',
            activo: true,
        }),
        new empleado_entity_1.Empleado({
            id: 2,
            nombreCompleto: 'Ana Sofía Torres Hernández',
            area: area_enum_1.Area.RECURSOS_HUMANOS,
            puesto: 'Especialista de Atracción de Talento',
            genero: genero_enum_1.Genero.FEMENINO,
            fechaEntrada: '2023-01-10',
            fechaNacimiento: '1993-11-05',
            activo: true,
        }),
        new empleado_entity_1.Empleado({
            id: 3,
            nombreCompleto: 'Roberto Sánchez Vega',
            area: area_enum_1.Area.FINANZAS,
            puesto: 'Analista Financiero Senior',
            genero: genero_enum_1.Genero.MASCULINO,
            fechaEntrada: '2021-06-01',
            fechaNacimiento: '1990-02-14',
            activo: true,
        }),
        new empleado_entity_1.Empleado({
            id: 4,
            nombreCompleto: 'Laura Patricia Gómez Díaz',
            area: area_enum_1.Area.OPERACIONES,
            puesto: 'Coordinadora de Operaciones',
            genero: genero_enum_1.Genero.FEMENINO,
            fechaEntrada: '2020-09-20',
            fechaNacimiento: '1985-12-30',
            activo: false,
        }),
        new empleado_entity_1.Empleado({
            id: 5,
            nombreCompleto: 'Alex Rivera Morales',
            area: area_enum_1.Area.VENTAS,
            puesto: 'Ejecutivo de Cuentas Clave',
            genero: genero_enum_1.Genero.OTRO,
            fechaEntrada: '2024-02-01',
            fechaNacimiento: '1996-04-18',
            activo: true,
        }),
    ];
    nextId = 6;
    async findAll() {
        return [...this.empleados];
    }
    async findById(id) {
        const empleado = this.empleados.find((e) => e.id === id);
        return empleado ?? null;
    }
    async create(datos) {
        const nuevoEmpleado = new empleado_entity_1.Empleado({
            id: this.nextId++,
            ...datos,
            activo: true,
        });
        this.empleados.push(nuevoEmpleado);
        return nuevoEmpleado;
    }
    async updateEstado(id, activo) {
        const empleado = this.empleados.find((e) => e.id === id);
        if (!empleado) {
            return null;
        }
        empleado.cambiarEstado(activo);
        return empleado;
    }
};
exports.InMemoryEmpleadoRepository = InMemoryEmpleadoRepository;
exports.InMemoryEmpleadoRepository = InMemoryEmpleadoRepository = __decorate([
    (0, common_1.Injectable)()
], InMemoryEmpleadoRepository);
//# sourceMappingURL=in-memory-empleado.repository.js.map