import { Rol } from '../enums/rol.enum';
export declare class Usuario {
    readonly username: string;
    readonly password: string;
    readonly rol: Rol;
    constructor(username: string, password: string, rol: Rol);
}
