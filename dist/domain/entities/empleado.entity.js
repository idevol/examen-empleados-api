"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    id;
    nombreCompleto;
    area;
    puesto;
    genero;
    fechaEntrada;
    fechaNacimiento;
    activo;
    estado;
    constructor(props) {
        this.id = props.id;
        this.nombreCompleto = props.nombreCompleto;
        this.area = props.area;
        this.puesto = props.puesto;
        this.genero = props.genero;
        this.fechaEntrada = props.fechaEntrada;
        this.fechaNacimiento = props.fechaNacimiento;
        const activo = props.activo ?? true;
        this.activo = activo;
        this.estado = this.calcularEstado(activo);
    }
    cambiarEstado(activo) {
        this.activo = activo;
        this.estado = this.calcularEstado(activo);
    }
    calcularEstado(activo) {
        return activo ? 'Activo' : 'Inactivo';
    }
}
exports.Empleado = Empleado;
//# sourceMappingURL=empleado.entity.js.map