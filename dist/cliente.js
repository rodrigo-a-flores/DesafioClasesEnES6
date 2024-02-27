"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }
  getNombre() {
    return this._nombre;
  }
  setNombre(nuevoNombre) {
    return this._nombre = nuevoNombre;
  }
  getImpuesto() {
    return this._impuesto;
  }
  setImpuesto(nuevoImpuesto) {
    this._impuesto = nuevoImpuesto;
  }
  calcularImpuesto() {
    return this._impuesto.calcularImpuesto();
  }
}
var _default = exports.default = Cliente;