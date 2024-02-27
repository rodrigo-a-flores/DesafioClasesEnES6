"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let impuesto = new _impuesto.default(950400, 10500);
let cliente = new _cliente.default('Rodrigo A.F', impuesto);
console.log("========================================");
console.log("=== XYZ Consultores - Impuesto Anual ===");
console.log("========================================");
console.log("");
console.log("Impuesto Anual de ".concat(cliente._nombre, " es: ").concat(cliente.calcularImpuesto()));