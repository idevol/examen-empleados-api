import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { LoginUseCase } from './application/use-cases/auth/login.use-case';
import { CambiarEstadoEmpleadoUseCase } from './application/use-cases/empleados/cambiar-estado-empleado.use-case';
import { ListarEmpleadosUseCase } from './application/use-cases/empleados/listar-empleados.use-case';
import { RegistrarEmpleadoUseCase } from './application/use-cases/empleados/registrar-empleado.use-case';
import { EMPLEADO_REPOSITORY } from './domain/repositories/empleado.repository.interface';
import { USUARIO_REPOSITORY } from './domain/repositories/usuario.repository.interface';
import { InMemoryEmpleadoRepository } from './infrastructure/repositories/in-memory-empleado.repository';
import { InMemoryUsuarioRepository } from './infrastructure/repositories/in-memory-usuario.repository';
import { AuthController } from './presentation/controllers/auth.controller';
import { EmpleadosController } from './presentation/controllers/empleados.controller';
import { JwtAuthGuard } from './presentation/guards/jwt-auth.guard';
import { RolesGuard } from './presentation/guards/roles.guard';
import { LoggerMiddleware } from './presentation/middlewares/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET', 'default_secret'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES_IN', '1h') as any,
        },
      }),
    }),
  ],
  controllers: [AuthController, EmpleadosController],
  providers: [
    // Inyección de repositorios (Infraestructura -> Dominio)
    {
      provide: EMPLEADO_REPOSITORY,
      useClass: InMemoryEmpleadoRepository,
    },
    {
      provide: USUARIO_REPOSITORY,
      useClass: InMemoryUsuarioRepository,
    },
    // Casos de Uso (Aplicación)
    LoginUseCase,
    ListarEmpleadosUseCase,
    RegistrarEmpleadoUseCase,
    CambiarEstadoEmpleadoUseCase,
    // Guards (Presentación)
    JwtAuthGuard,
    RolesGuard,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}