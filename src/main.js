import Cliente from './cliente.js';
import Impuesto from './impuesto.js';

let impuesto = new Impuesto(950400, 10500);
let cliente = new Cliente('Rodrigo A.F', impuesto);
console.log("========================================");
console.log("=== XYZ Consultores - Impuesto Anual ===");
console.log("========================================");
console.log("");
console.log(`Impuesto Anual de ${cliente._nombre} es: ${cliente.calcularImpuesto()}`);