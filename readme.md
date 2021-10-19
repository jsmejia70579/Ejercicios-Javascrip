# Ejercicios de objetos
Ejercicios Objetos y Clases

## Participantes
Juan Salvador Mejia Diaz
Jorge Armando Gonzalez Ocampo

## Ejercicio 1
```javascript
class persona_clase{
constructor(nombrep,edadp,cedulap){
   this.nombre=nombrep;
    this.edad=edadp;
    this.cedula=cedulap;
}

mostrar(){
    return `el nombre es ${this.nombre} con una edad de ${this.edad} y su cedula es ${this.cedula}`
}

mayor(){
    if(this.edad>=18){
        return ` ${this.nombre} es mayor de edad, con una edad de ${this.edad}`
    }else{return ` ${this.nombre} es menor de edad, con una edad de ${this.edad}`}
}

}
```
## Ejercicio 2
```javascript
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
```
## Ejercicio 3
```javascript
class formulas {

    suma(numero1p, numero2p) {
        this.numero1 = numero1p;
        this.numero2 = numero2p;

        if (Number.isInteger(this.numero1) == true && Number.isInteger(this.numero2) == true) {
            const sumaR = this.numero1 + this.numero2;
            return `La suma es de: ${sumaR}`;
        }

        return `ingresa numeros enteros`;
    }

    fibonacci(numerofibp) {
        this.numerofib = numerofibp;
        var num = []
        var numc = 0
        var sumaFibo = 0
        while (numc < this.numerofib) {
            numc += 1
            sumaFibo += numc
            num.push(numc)
        }
        return `los numeros ${num} y la suma es de ${sumaFibo} `
    }

    operacion_modulo(numeroopP) {
        this.numeroop = numeroopP;

        var numc = 0

        while (numc < this.numeroop) {
            if (numc % 2 == 0) {
                console.log(`el numero ${numc} tiene reciduo 0`)
            } else (console.log(`el numero ${numc} tiene reciduo diferente de 0`))

            numc += 1
        }

    }

    primos(numeprp) {

        this.numepr = numeprp;

        console.log(`has pasado el numero ${this.numepr}`)


        for (var i = 2; i < this.numepr; i++) {

            if (this.numepr % i === 0) {
                console.log(i + " es multiplo de " + this.numepr)
                console.log(this.numepr + " no es primo, porque " + i + " es multipo")
                return false
            }

            console.log(` el numero ${this.numepr} si es primo :)`)

        }

    }

}
```
## Ejercicio 4
```javascript
class persona{

pesoIdeal(pesop,alturap){
    this.peso=pesop;
    this.altura=alturap;

    if((this.peso/(Math.pow(this.altura,2)))<20){
return -1
    }
    if((this.peso/(Math.pow(this.altura,2)))>=20 &&(this.peso/(Math.pow(this.altura,2)))<=25){
        return 0
    }
    if((this.peso/(Math.pow(this.altura,2)))>25){
        return 1
    }
}

esMayorDeEdad(edadp){
    this.edad=edadp;

    if(this.edad>17){
        return true
    }return false
}


comprobarSexo(sexop){
    this.sexo=sexop;
var sexoA=this.sexo.toLowerCase();
    if(sexoA==='h'||sexoA==='m'){
        return `El sexo es correcto ${sexoA}`

    }return this.sexo='h'
}

crear(nombrep,  DNIp){
    this.nombre=nombrep;
    this.dni=DNIp; 
}
}
```
## Ejercicio 5
```javascript
class contraseña{

crear(contraseñaP){
    this.contraseña=contraseñaP;

}
esFuerte(){
    this.contraseña
    var mayuscula=0
    var minuscula=0
    var numeros=0
    
    for(var i =0;i<this.contraseña.length;i++){
            if((this.contraseña[i]===this.contraseña[i].toUpperCase()) ===true && ((this.contraseña[i]<=0 ||this.contraseña[i]>=0)===false))
                 {
                     mayuscula+=1
                    }
            if((this.contraseña[i]===this.contraseña[i].toLowerCase())===true && ((this.contraseña[i]<=0 ||this.contraseña[i]>=0)===false))
            {
               minuscula+=1
             }
    
    if(this.contraseña[i]<=0 ||this.contraseña[i]>=0 ===true)
    {
        numeros+=1
    }

}
if(mayuscula>2 &&minuscula>1 && numeros>5){

console.log( `Su contraseña es segura. mayusculas ${mayuscula}, minusculas ${minuscula}, numeros ${numeros}`)
}else{ console.log(`Su contraseña no es segura. mayusculas ${mayuscula}, minusculas ${minuscula}, numeros ${numeros}`)}
}

generarPassword(){
var result = '';
   var Mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
   var Minuscula ='abcdefghijklmnñopqrstuvwxyz'
   var Numero='0123456789'

   var MayusculasLength = Mayusculas.length;
   var MinusculaLength = Minuscula.length;
   var NumeroLength = Numero.length;


   for ( var i = 0; i < 3; i++ ) {
      result += Mayusculas.charAt(Math.floor(Math.random() * MayusculasLength));
   }

   for ( var i = 0; i < 2; i++ ) {
      result += Minuscula.charAt(Math.floor(Math.random() * MinusculaLength));
   }
 
 
   for ( var i = 0; i < 6; i++ ) {
      result += Numero.charAt(Math.floor(Math.random() * NumeroLength));
   }
   return result;
}

seguridadPaswword(contraseñaP){
this.contraseña=contraseñaP;
    var  tam=this.contraseña.length;

    if (tam>=1 && tam<=6){
return "DEBIL"
    }
    if(tam>=7 && tam<=10){
return "MEDIA"
    }
    if(tam>=20){
return "FUERTE"
    }
}

}
```
## Ejercicio 6
```javascript
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
    


```
## Ejercicio 7
```javascript
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
    


```
## Ejercicio 8
```javascript
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
```
## Ejercicio 9
```javascript
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
```
## Ejercicio 10
```javascript
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
```
##Ejercicio 11
```javascript
class libro{

libro(tituloLibrop,autorp,numeroEjemplaresLibrop,numeroEjemplaresPrestadosp){
this.tituloLibro=tituloLibrop;
this.autor=autorp
this.numeroEjemplaresLibro=numeroEjemplaresLibrop
this.numeroEjemplaresPrestados=numeroEjemplaresPrestadosp
}
prestamo(){
    if(this.numeroEjemplaresPrestados<this.numeroEjemplaresLibro){return `Si se pudo prestar, total de unidades prestadas ${this.numeroEjemplaresPrestados+=1}`}
return "no hay unidades para prestar"
}
devolucion(){
if(this.numeroEjemplaresPrestados>0){return `Si se pudo devolver, total de unidades prestadas ${this.numeroEjemplaresPrestados-=1}`}
return "no hay unidades para devolver"
}
toString(){
    return `Los datos del libro son    Nombre: ${this.tituloLibro} Autor:${this.autor}   Ejemplares prestados: ${this.numeroEjemplaresLibro}   Ejemplares Devueltos: ${this.numeroEjemplaresPrestados}`
}
}

//préstamo() que incremente el atributo correspondiente cada vez que se realice un préstamo del libro. OK
//No se podrán prestar libros de los que no queden ejemplares disponibles para prestar. OK
//Devuelve true si se ha podido realizar la operación y false en caso contrario. OK

//devolucion() que decremente el atributo correspondiente cuando se produzca la devolución de un libro.
//No se podrán devolver libros que no se hayan prestado. Devuelve true si se ha podido realizar la operación y false en caso contrario.
//toString() para mostrar los datos de los libros.
```
## Ejercicio 12
```javascript
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
```
## Ejercicio 13
```javascript
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
```
## Ejercicio 14
```javascript
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

```
