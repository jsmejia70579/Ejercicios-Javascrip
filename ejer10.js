class calculadora{
    cargar(numeroprincipalp){
        this.numeroprincipal=numeroprincipalp;
        return this.numeroprincipal
    }

    sumar(numerosumap){
this.numerosuma=numerosumap

this.numeroprincipal+=this.numerosuma
return this.numeroprincipal
    }

    restar(numerorestap){
this.numeroresta=numerorestap
this.numeroprincipal-=this.numeroresta
return this.numeroprincipal
    }
    multiplicar(numeromultip){
        this.numeroresta=numeromultip
        this.numeroprincipal*=this.numeroresta
        return this.numeroprincipal
    }

    valorActual(){
        return`La calculadora tiene el valor de ${this.numeroprincipal}`
    }

}