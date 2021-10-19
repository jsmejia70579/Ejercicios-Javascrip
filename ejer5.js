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
   var Mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var Minuscula ='abcdefghijklmnopqrstuvwxyz'
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