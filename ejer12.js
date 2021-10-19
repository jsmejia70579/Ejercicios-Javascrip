//esta nave tiene un nivel de potencia de 0 a 100 OK
//y un nivel de coraza de 0 a 20 OK

//puede encontrarse con una pila atómica ,en cuyo caso su potencia aumenta en 25 OK
//un escudo, en cuyo caso su nivel de coraza aumenta en 10 OK

//recibir un ataque, en este caso se especifican los puntos de fuerza del ataque recibido
//el ataque con la coraza, y si la coraza no alcanza, el resto se descuenta de la potencia

//La Enterprise nace con 50 de potencia y 5 de coraza OK

class Enterprise{
   

    inicio(){
        this.potencia=50;;
        this.coraza=5;
    }


encontrarPilaAtomica(){
if(this.potencia<100){
    var potExt=0
    while(potExt<25){
        if(this.potencia<100){
        
        this.potencia+=1}
potExt+=1

    }
        return "subimos la potencia"
        
    
}
return "La potencia esta al maximo"

}



encontrarEscudo() {
if(this.coraza<20){
    var coraExt=0
    while(coraExt<10){
        if(this.coraza<20){
            this.coraza+=1
        }
        coraExt+=1
            
    }
    return "subimos la coraza"

}
return "la coraza esta al maximo"

}


recibirAtaque(potenciAtaquep){
    this.potenciAtaque=potenciAtaquep
var ataExt=0

    while(ataExt<(this.potenciAtaque-1)){

if(this.coraza>0){
    this.coraza-=1
    
}


if(this.potencia>0 && this.coraza==0) {

    this.potencia-=1
}
ataExt+=1;
    }
return `Terminaste el ataque con una potencia ${this.potencia} y con un escudo de ${this.coraza}`

}



 mostrarniveles(){
    return `Los niveles de Enterprise son de potencia ${this.potencia} y escudo de ${this.coraza}`
}


fortalezaDefensiva(){
//que es el máximo nivel de ataque que puede resistir, o sea, coraza más potencia
return this.coraza+=100

}

necesitaFortalecerse(){
//tiene que ser true si su coraza es 0 y su potencia es menos de 20
if(this.coraza==0&&this.potencia<20){
    return true
}return false


}

fortalezaOfensiva(){
//cuántos puntos de fuerza tendría un ataque de la Enterprise
//si tiene menos de 20 puntos de potencia entonces es 0, si no es (puntos de potencia - 20) / 2.

if(this.potencia<20)
{
    return"su ataque es de 0"
}
if(this.potencia>20){
    var ataque=(this.potencia-20)/2; return ataque
return ataque

    }


}

}