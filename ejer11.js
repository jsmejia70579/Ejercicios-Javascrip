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