import { Rol } from '../../domain/enums/rol.enum';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: Rol[]) => import("@nestjs/common", { with: { "resolution-mode": "import" } }).CustomDecorator<string>;
