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
exports.LoginUseCase = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const usuario_repository_interface_1 = require("../../../domain/repositories/usuario.repository.interface");
let LoginUseCase = class LoginUseCase {
    usuarioRepository;
    jwtService;
    constructor(usuarioRepository, jwtService) {
        this.usuarioRepository = usuarioRepository;
        this.jwtService = jwtService;
    }
    async execute(input) {
        const user = await this.usuarioRepository.findByUsername(input.usuario);
        if (!user || user.password !== input.password) {
            throw new common_1.UnauthorizedException("Usuario o contraseña incorrectos");
        }
        const payload = {
            sub: user.username,
            usuario: user.username,
            rol: user.rol,
        };
        const token = await this.jwtService.signAsync(payload);
        return {
            access_token: token,
            token,
            usuario: user.username,
            rol: user.rol,
        };
    }
};
exports.LoginUseCase = LoginUseCase;
exports.LoginUseCase = LoginUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(usuario_repository_interface_1.USUARIO_REPOSITORY)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], LoginUseCase);
//# sourceMappingURL=login.use-case.js.map