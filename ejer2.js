class cuenta{
    constructor(titularp){
        this.titular=titularp;
        
    }
    cantidad(cantidadp){
        if(cantidadp>0){
        this.cantidad=cantidadp;}else{return false}
    }
    mostrar(){
        return `El Titular es ${this.titular} con la cantidad de  ${this.cantidad}`
    }

retirar(monto){
    this.cantidad-=monto;
}
}