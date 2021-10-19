class contador{
valorActualN(nuevoValor){
    this.valorActual=nuevoValor
} 




accionG(accionp){
    this.accion=accionp;
    if(this.accion==='valorActual()'){
            this.valorActual
return `El contador es ${this.valorActual}`
    }
    if(this.accion==='dec()'){
        
this.valorActual-=1
return `El contador es ${this.valorActual}`

    }
    if(this.accion==='inc()'){
        this.valorActual+=1
return `El contador es ${this.valorActual}`
    }
    if(this.accion==='reset()'){
        this.valorActual=0;
return `El contador es ${this.valorActual}`
    }
}


ultimoComando(){
    this.accion
    
if(this.accion==='valorActual()'){
    return `Valor actual`
    }
if(this.accion==='dec()'){
        
    return `Decremento`

    }
if(this.accion==='inc()'){
    return `Incremento`
    }
if(this.accion==='reset()'){
    return `Resetear`
    }
    
}
}
    

