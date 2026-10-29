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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadosController = void 0;
const common_1 = require("@nestjs/common");
const listar_empleados_use_case_1 = require("../../application/use-cases/empleados/listar-empleados.use-case");
const registrar_empleado_use_case_1 = require("../../application/use-cases/empleados/registrar-empleado.use-case");
const cambiar_estado_empleado_use_case_1 = require("../../application/use-cases/empleados/cambiar-estado-empleado.use-case");
const rol_enum_1 = require("../../domain/enums/rol.enum");
const roles_decorator_1 = require("../decorators/roles.decorator");
const cambiar_estado_dto_1 = require("../dtos/cambiar-estado.dto");
const crear_empleado_dto_1 = require("../dtos/crear-empleado.dto");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const roles_guard_1 = require("../guards/roles.guard");
let EmpleadosController = class EmpleadosController {
    listarEmpleadosUseCase;
    registrarEmpleadoUseCase;
    cambiarEstadoEmpleadoUseCase;
    constructor(listarEmpleadosUseCase, registrarEmpleadoUseCase, cambiarEstadoEmpleadoUseCase) {
        this.listarEmpleadosUseCase = listarEmpleadosUseCase;
        this.registrarEmpleadoUseCase = registrarEmpleadoUseCase;
        this.cambiarEstadoEmpleadoUseCase = cambiarEstadoEmpleadoUseCase;
    }
    async listar() {
        return this.listarEmpleadosUseCase.execute();
    }
    async registrar(dto) {
        return this.registrarEmpleadoUseCase.execute(dto);
    }
    async cambiarEstado(idParam, dto) {
        const id = Number(idParam);
        if (Number.isNaN(id) || !Number.isInteger(id) || id <= 0) {
            throw new common_1.BadRequestException('El parámetro id debe ser un número entero válido');
        }
        return this.cambiarEstadoEmpleadoUseCase.execute(id, dto.activo);
    }
};
exports.EmpleadosController = EmpleadosController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)(rol_enum_1.Rol.ADMIN, rol_enum_1.Rol.CONSULTA),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmpleadosController.prototype, "listar", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(rol_enum_1.Rol.ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_empleado_dto_1.CrearEmpleadoDto]),
    __metadata("design:returntype", Promise)
], EmpleadosController.prototype, "registrar", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, roles_decorator_1.Roles)(rol_enum_1.Rol.ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, cambiar_estado_dto_1.CambiarEstadoDto]),
    __metadata("design:returntype", Promise)
], EmpleadosController.prototype, "cambiarEstado", null);
exports.EmpleadosController = EmpleadosController = __decorate([
    (0, common_1.Controller)('empleados'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [listar_empleados_use_case_1.ListarEmpleadosUseCase,
        registrar_empleado_use_case_1.RegistrarEmpleadoUseCase,
        cambiar_estado_empleado_use_case_1.CambiarEstadoEmpleadoUseCase])
], EmpleadosController);
//# sourceMappingURL=empleados.controller.js.map