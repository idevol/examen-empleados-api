"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearEmpleadoDto = void 0;
const class_validator_1 = require("class-validator");
const area_enum_1 = require("../../domain/enums/area.enum");
const genero_enum_1 = require("../../domain/enums/genero.enum");
class CrearEmpleadoDto {
    nombreCompleto;
    area;
    puesto;
    genero;
    fechaEntrada;
    fechaNacimiento;
}
exports.CrearEmpleadoDto = CrearEmpleadoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'nombreCompleto debe ser una cadena de texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'nombreCompleto es obligatorio' }),
    __metadata("design:type", String)
], CrearEmpleadoDto.prototype, "nombreCompleto", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(area_enum_1.Area, {
        message: 'area debe ser uno de los siguientes valores: TECNOLOGIA, RECURSOS_HUMANOS, FINANZAS, OPERACIONES, VENTAS, ADMINISTRACION',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'area es obligatorio' }),
    __metadata("design:type", String)
], CrearEmpleadoDto.prototype, "area", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'puesto debe ser una cadena de texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'puesto es obligatorio' }),
    __metadata("design:type", String)
], CrearEmpleadoDto.prototype, "puesto", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(genero_enum_1.Genero, {
        message: 'genero debe ser uno de los siguientes valores: MASCULINO, FEMENINO, OTRO',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'genero es obligatorio' }),
    __metadata("design:type", String)
], CrearEmpleadoDto.prototype, "genero", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'fechaEntrada debe tener el formato YYYY-MM-DD',
    }),
    (0, class_validator_1.IsDateString)({ strict: true }, { message: 'fechaEntrada debe ser una fecha válida en formato YYYY-MM-DD' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'fechaEntrada es obligatorio' }),
    __metadata("design:type", String)
], CrearEmpleadoDto.prototype, "fechaEntrada", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'fechaNacimiento debe tener el formato YYYY-MM-DD',
    }),
    (0, class_validator_1.IsDateString)({ strict: true }, {
        message: 'fechaNacimiento debe ser una fecha válida en formato YYYY-MM-DD',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'fechaNacimiento es obligatorio' }),
    __metadata("design:type", String)
], CrearEmpleadoDto.prototype, "fechaNacimiento", void 0);
//# sourceMappingURL=crear-empleado.dto.js.map