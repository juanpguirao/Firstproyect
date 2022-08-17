// array usuarios
const usuarios=[];

const formulario = document.getElementById("formularioUsuario");
    formulario.onsubmit =(evento)=> {
        evento.preventDefault();
        let usuario = new Usuario (email.value, contrasena1.value);
        usuarios.push(usuario);
        console.table(usuarios);
    }
const email = document.getElementById("email");
const contrasena1 = document.getElementById("contrasena1");
const contrasena2 = document.getElementById("contrasena2");

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar Usuario
for (const usuario of usuarios) {
    guardarLocal(usuario.nombre, JSON.stringify(usuario));
}
// o almacenar array completo
guardarLocal("listaUsuarios", JSON.stringify(usuarios));

// constructor de cada usuario
class Usuario {
    constructor(email, contrasena1, nombre, apellido, dni){
        this.email = email;
        this.contrasena1= contrasena1;
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.fechacreacion= new Date();
    }
}
//refetencia de  contenedores de html
const newUser = document.getElementById("register");


addUser();

function addUser(){
    for(const usuario of usuarios){}
         usuario.push(new usuarios ("this.nombre", "this.apellido", "this.dni","this.fechacreacion"))   
        }