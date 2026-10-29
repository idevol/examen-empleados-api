# API REST de Administración de Empleados (NestJS + Clean Architecture)

API RESTful desarrollada con **NestJS** y **TypeScript** bajo los principios de **Clean Architecture** para el registro, consulta y administración de estado de empleados con autenticación **JWT** y control de acceso basado en roles (**RBAC**).

## 1. Versiones Utilizadas

- **Node.js:** v24.x (LTS/Current en macOS)
- **Framework:** NestJS v11 (`@nestjs/core`, `@nestjs/common`, `@nestjs/platform-express`)
- **Lenguaje:** TypeScript v5.x

## 2. Instrucciones para Ejecutar el Proyecto

1. Clonar o descomprimir el repositorio y ubicarse en la carpeta del proyecto:
   ```bash
   cd examen-empleados-api
   ```

2. Configurar el archivo de variables de entorno `.env` a partir de `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. Instalar dependencias y levantar el servidor en modo desarrollo:
   ```bash
   npm install
   npm run start:dev
   ```

4. El servidor iniciará por defecto en: `http://localhost:3000/api`

## 3. Arquitectura del Proyecto (Clean Architecture)

El proyecto está dividido en 4 capas desacopladas dentro de `src/`:

- **`domain/` (Dominio):** Contiene las entidades de negocio (`Empleado`, `Usuario`), enumeraciones (`Area`, `Genero`, `Rol`) y contratos de repositorios (`IEmpleadoRepository`, `IUsuarioRepository`). No depende del framework.
- **`application/` (Aplicación):** Contiene los casos de uso (`LoginUseCase`, `ListarEmpleadosUseCase`, `RegistrarEmpleadoUseCase`, `CambiarEstadoEmpleadoUseCase`) que encapsulan las reglas de negocio.
- **`infrastructure/` (Infraestructura):** Implementa los repositorios en memoria (`InMemoryEmpleadoRepository` con 5 empleados mock iniciales e `InMemoryUsuarioRepository` con los usuarios `admin` y `consulta`).
- **`presentation/` (Presentación):** Contiene los controladores REST (`AuthController`, `EmpleadosController`), DTOs validados con `class-validator`, Guards (`JwtAuthGuard`, `RolesGuard`), el middleware `LoggerMiddleware` y el filtro global `AllExceptionsFilter`.

## 4. Dependencias Principales

- `@nestjs/core`, `@nestjs/common`, `@nestjs/platform-express`: Núcleo del framework NestJS.
- `@nestjs/jwt`: Generación y verificación de tokens JWT.
- `@nestjs/config`: Lectura de variables de entorno desde archivo `.env`.
- `class-validator` y `class-transformer`: Validación declarativa de DTOs de entrada.

## 5. Ejemplos de Peticiones (cURL)

### 5.1. Iniciar Sesión (`POST /api/auth/login`)

**Usuario Administrador (`ADMIN`):**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "usuario": "admin",
    "password": "Admin123!"
  }'
```

**Usuario Consulta (`CONSULTA`):**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "usuario": "consulta",
    "password": "Consulta123!"
  }'
```

### 5.2. Listar Empleados (`GET /api/empleados`) - Roles: `ADMIN`, `CONSULTA`
```bash
curl -X GET http://localhost:3000/api/empleados \
  -H "Authorization: Bearer <TU_TOKEN_JWT>"
```

### 5.3. Registrar Empleado (`POST /api/empleados`) - Rol: `ADMIN`
```bash
curl -X POST http://localhost:3000/api/empleados \
  -H "Authorization: Bearer <TU_TOKEN_JWT_ADMIN>" \
  -H "Content-Type: application/json" \
  -d '{
    "nombreCompleto": "María López Ruiz",
    "area": "TECNOLOGIA",
    "puesto": "Desarrolladora Backend",
    "genero": "FEMENINO",
    "fechaEntrada": "2026-11-02",
    "fechaNacimiento": "1994-05-17"
  }'
```

### 5.4. Activar / Desactivar Empleado (`PATCH /api/empleados/:id/estado`) - Rol: `ADMIN`
```bash
curl -X PATCH http://localhost:3000/api/empleados/1/estado \
  -H "Authorization: Bearer <TU_TOKEN_JWT_ADMIN>" \
  -H "Content-Type: application/json" \
  -d '{
    "activo": false
  }'
```