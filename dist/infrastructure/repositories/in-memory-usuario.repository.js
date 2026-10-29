"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUsuarioRepository = void 0;
const common_1 = require("@nestjs/common");
const usuario_entity_1 = require("../../domain/entities/usuario.entity");
const rol_enum_1 = require("../../domain/enums/rol.enum");
let InMemoryUsuarioRepository = class InMemoryUsuarioRepository {
    usuarios = [
        new usuario_entity_1.Usuario('admin', 'Admin123!', rol_enum_1.Rol.ADMIN),
        new usuario_entity_1.Usuario('consulta', 'Consulta123!', rol_enum_1.Rol.CONSULTA),
    ];
    async findByUsername(username) {
        const usuario = this.usuarios.find((u) => u.username === username);
        return usuario ?? null;
    }
};
exports.InMemoryUsuarioRepository = InMemoryUsuarioRepository;
exports.InMemoryUsuarioRepository = InMemoryUsuarioRepository = __decorate([
    (0, common_1.Injectable)()
], InMemoryUsuarioRepository);
//# sourceMappingURL=in-memory-usuario.repository.js.map