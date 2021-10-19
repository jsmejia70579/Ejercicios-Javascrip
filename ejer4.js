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