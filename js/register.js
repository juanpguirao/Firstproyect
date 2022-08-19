// array usuarios
const usuarios=[];
//variables
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const contrasena1 = document.getElementById("contrasena1");

//Llamando de de nodo y eventos al cargar formulario
const formulario = document.getElementById("formularioUsuario");
    formulario.onsubmit =(evento)=> {
        //Si quito esto se rompe el codigo
        evento.preventDefault();
        //Agregando Nuevo usuario al array a traves de evento onsubmit
        let usuario = new Usuario (nombre.value, apellido.value, email.value, contrasena1.value);
        usuarios.push(usuario);
        //Muestro tabla de Array de usuarios hasta el momento
        console.table(usuarios);

        //Guardo Usuario agregado al local Storage
        const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
        //Almacenar Usuario
        for (const usuario of usuarios) {
            guardarLocal(usuario.nombre, JSON.stringify(usuario));
        }
            // o almacenar array completo
            guardarLocal("listaUsuarios", JSON.stringify(usuarios));
        }

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//Almacenar Usuario
for (const usuario of usuarios) {
    guardarLocal(usuario.nombre, JSON.stringify(usuario));
}
// o almacenar array completo
guardarLocal("listaUsuarios", JSON.stringify(usuarios));

// constructor de cada usuario
class Usuario {
    constructor(nombre, apellido, email, contrasena1){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email = email;
        this.contrasena1= contrasena1;
        this.fechacreacion= new Date();
    }
}
