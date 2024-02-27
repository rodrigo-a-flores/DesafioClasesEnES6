class Impuesto{
    constructor(montoBrutoAnual, deducciones){
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }
    getMontoBrutoAnual(){
        return this._montoBrutoAnual;
    }
    setMontoBrutoAnual(nuevoMontoBA){
        return this._montoBrutoAnual = nuevoMontoBA;
    }
    getDeducciones(){
        return this._montoBrutoAnual;
    }
    setDeducciones(nuevasDeducciones){
        return this._deducciones = nuevasDeducciones;
    }
    calcularImpuesto(){
        return (this._montoBrutoAnual - this._deducciones) * 0.21;
    }
}
export default Impuesto;