"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const login_use_case_1 = require("./application/use-cases/auth/login.use-case");
const cambiar_estado_empleado_use_case_1 = require("./application/use-cases/empleados/cambiar-estado-empleado.use-case");
const listar_empleados_use_case_1 = require("./application/use-cases/empleados/listar-empleados.use-case");
const registrar_empleado_use_case_1 = require("./application/use-cases/empleados/registrar-empleado.use-case");
const empleado_repository_interface_1 = require("./domain/repositories/empleado.repository.interface");
const usuario_repository_interface_1 = require("./domain/repositories/usuario.repository.interface");
const in_memory_empleado_repository_1 = require("./infrastructure/repositories/in-memory-empleado.repository");
const in_memory_usuario_repository_1 = require("./infrastructure/repositories/in-memory-usuario.repository");
const auth_controller_1 = require("./presentation/controllers/auth.controller");
const empleados_controller_1 = require("./presentation/controllers/empleados.controller");
const jwt_auth_guard_1 = require("./presentation/guards/jwt-auth.guard");
const roles_guard_1 = require("./presentation/guards/roles.guard");
const logger_middleware_1 = require("./presentation/middlewares/logger.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            jwt_1.JwtModule.registerAsync({
                global: true,
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    secret: configService.get('JWT_SECRET', 'default_secret'),
                    signOptions: {
                        expiresIn: configService.get('JWT_EXPIRES_IN', '1h'),
                    },
                }),
            }),
        ],
        controllers: [auth_controller_1.AuthController, empleados_controller_1.EmpleadosController],
        providers: [
            {
                provide: empleado_repository_interface_1.EMPLEADO_REPOSITORY,
                useClass: in_memory_empleado_repository_1.InMemoryEmpleadoRepository,
            },
            {
                provide: usuario_repository_interface_1.USUARIO_REPOSITORY,
                useClass: in_memory_usuario_repository_1.InMemoryUsuarioRepository,
            },
            login_use_case_1.LoginUseCase,
            listar_empleados_use_case_1.ListarEmpleadosUseCase,
            registrar_empleado_use_case_1.RegistrarEmpleadoUseCase,
            cambiar_estado_empleado_use_case_1.CambiarEstadoEmpleadoUseCase,
            jwt_auth_guard_1.JwtAuthGuard,
            roles_guard_1.RolesGuard,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map