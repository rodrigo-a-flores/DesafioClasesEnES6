"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }
  getMontoBrutoAnual() {
    return this._montoBrutoAnual;
  }
  setMontoBrutoAnual(nuevoMontoBA) {
    return this._montoBrutoAnual = nuevoMontoBA;
  }
  getDeducciones() {
    return this._montoBrutoAnual;
  }
  setDeducciones(nuevasDeducciones) {
    return this._deducciones = nuevasDeducciones;
  }
  calcularImpuesto() {
    return (this._montoBrutoAnual - this._deducciones) * 0.21;
  }
}
var _default = exports.default = Impuesto;