import { Rol } from '../enums/rol.enum';

export class Usuario {
    constructor(
        public readonly username: string,
        public readonly password: string,
        public readonly rol: Rol,
    ) {}
}