//El prototipo de motor tiene 5 cambios (de primera a quinta)
//y soporta hasta 5000 RPM
//La velocidad del auto se calcula así: (rpm / 100) * (0.5 + (cambio / 2))
//en tercera a 2000 rpm, la velocidad es 20 * (0.5 + 1.5) = 40
//controlar el consumo. Se parte de una base de 0.05 litros por kilómetro
// A este valor se le aplican los siguientes ajustes: Si el motor está a más de 3000 rpm, entonces se multiplica por (rpm - 2500) / 500
//3500 rpm hay que multiplicar por 2, a 4000 rpm por 3, etc. Si el motor está en primera, entonces se multiplica por 3.
//Si el motor está en segunda, entonces se multiplica por 2
//Los efectos por revoluciones y por cambio se acumulan
// si el motor está en primera y a 5000 rpm, entonces el consumo es 0.05 * 5 * 3 = 0.75 litros/km
//El metodo constructor debe entender estos mensajes: arrancar(), se pone en primera con 500 rpm.
//subirCambio() bajarCambio() subirRPM(cuantos) bajarRPM(cuantos) velocidad() consumoActualPorKm()

class motor{

arrancar(){
    this.cambio=1
    this.rpm=500
}


subirCambio(){
    if(this.cambio>=0 &&this.cambio<5){
this.cambio+=1
return this.cambio
    }return "No existe el cambio"
}

bajarCambio() {
    if(this.cambio>=1 &&this.cambio<=5){
        this.cambio-=1
       return this.cambio
    }return "No existe el cambio"
}

subirRPM(rpmsp) {
    this.rpms=rpmsp
    var con=0
   if(this.rpm<5000 && this.rpm>0){
         while(con<this.rpms){
             if(this.rpm<5000){
                  this.rpm+=1
            }
            con+=1
             
           
       }
   }return this.rpm
}


bajarRPM(rpmbp){
 this.rpmb=rpmbp
    var con=0
   if(this.rpm<5000 && this.rpm>0){
         while(con<this.rpmb){
             if(this.rpm<5000 && this.rpm>0 ){
                  this.rpm-=1
            }
            con+=1
             
           
       }
   }return this.rpm


}


velocidad() {
var velocidadT=((this.rpm/100) *(0.5+(this.cambio/2)))
    return velocidadT
}


consumoActualPorKm(kilomep)
{
    this.kilome=kilomep;
    var consumo=0.05*this.kilome;



if(this.rpm>3000){
if(this.cambio==1){
    var conExt=(this.rpm-2500)/500
return consumo*conExt*3
}
if(this.cambio==2){
    var conExt=(this.rpm-2500)/500
return consumo*conExt*2
}

var conExt=(this.rpm-2500)/500
return consumo*conExt
}




return consumo
}

}






