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