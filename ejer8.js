class chimuela{
ini(){

    this.energía=0
    }
    
mostrarEne(){
    return `La energía es de ${this.energía}`
}

alimentar(alimentop){
    
    this.alimento=alimentop;
    var enet=this.alimento*4
    this.energía+=(enet)
    return `La energía de tu chimuela quedo en ${this.energía}`
}

volarc(){
    var res ='si'
    this.energía-=20;
    while(res==='si'){
       var enet=prompt("Cuantos fueron los km")
    //this.volar=volarp;
    this.energía-=(enet)
       var res=prompt("desea añadir otro vuelo?").toLowerCase()
    
    }
    return `La energía de tu chimuela quedo en ${this.energía}`
}

estadoAnimo(){

    if(this.energía<50){
        return "estaDebil()"
    }
    if(this.energía>=500 && this.energía<=1000){
        return 'estaFeliz()'
    }

var enerseg=this.energía
var enerseg1=enerseg/5

    if(enerseg1 ==120){
        return 'quiere volar 24 kilómetros'
    }

    if(enerseg1 >=300 && enerseg1 <=400){
        return enerseg1+10
        if((enerseg1 %20)==0){
        return enerseg1+15
    }
    }

    

}



}

// cuantoQuiereVolar(), que es el resultado de la siguiente cuenta.
//  De base, quiere volar (energía / 5) kilómetros, p.ej., 
// si tiene 120 de energía,quiere volar 24 kilómetros.  
// Si la energía está entre 300 y 400,  entonces hay que sumar 10 a este valor, y si es múltiplo de 20, otros 15.
//   Entonces, si Chimuela tiene 340 de energía, quiere volar 68 + 10 + 15 = 93 kilómetros.

//    Para probar esto, sobre un REPL recién lanzado darle de comer 85 a Chimuela, así la energía queda en