const usuarios=[];


class Usuario {
    constructor(nombre, apellido, dni){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.fechacreacion= new Date();
    }
}
const newUser = document.getElementById("register")
