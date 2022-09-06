//Array de productos cargados a carrito
//VARIABLES PRINCIPALES-
let productos=[];
let carrito=[];
//Llamando funciones
agregarAlCarrito();
//Revisando local Storage si hay productos pasados en carrito
const locaCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

carrito.forEach ( producto =>{
  document.querySelector("#items").innerHTML+=`  
  <tr>
  <th scope="col">${producto.id}</th>
  <th scope="col">${producto.nombre}</th>
  <th scope="col">${producto.cantidad}</th>
  <th scope="col">${producto.precio}</th>
  <td><button id="eliminar${producto.id}" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button></td>
  </tr>
  `;
})
const contenedorCarrito = document.getElementById("itemsCarrito");
const contenedorTotalModal = document.getElementById("footerTotal");
const botonVaciarCarrito = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("conteo-carrito");
const packs = document.getElementById('shop');


//Se guarda en una variable una funcion flecha q muestran cada uno de los productos traidos por fetch desde json
const mostrar =()=>{
  fetch('../json/productos.json')
  .then((res) => res.json())
  .then((productos) => {
    for(var producto of productos){

      packs.innerHTML +=
      `<div class="list-group productos container" >
        <a href="#" class="list-group-item list-group-item-action" aria-current="true" id="boton${producto.id}">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${producto.nombre}</h5>
          <small>$${producto.precio}</small>
        </div>
        <p class="mb-1">${producto.descripcion}.</p>
        <small>${producto.vencimiento}</small>
      </a>
      </div>
      `;
      
    }  
        //Agregando evento a cada boton para agregar al carrito por cada producto itinerado
        productos.forEach(producto => {
          //evento individial para cada boton
          document.getElementById(`boton${producto.id}`).addEventListener("click",function(){agregarAlCarrito(producto)});
        })
  })
}
//Llamando a la funcion a travez de la variable
mostrar();

//Constructor de elementos del carrito 
class Carrito{
  constructor (nombre, cantidad, precio){
  this.nombre = nombre;;
  this.cantidad = parseFloat(cantidad); 
  this.precio= parseFloat(precio);
  this.id = parseInt(id)
}
}
        //Funcion para agregar al carrito, se va a agregar mediante un innerhtml 
function agregarAlCarrito(agregar){ 
        //sumando al carrito
    carrito.push(new Carrito(agregar.nombre, agregar.cantidad, agregar.precio, agregar.id));
    Swal.fire(
      {
        position: 'top-end',
        icon: 'success',
        title: 'Agregaste a tu carrito:'+"\n"+agregar.nombre,
        showConfirmButton: false,
        timer: 2500,
        toast : true
      }
    )
            //sumando al modal  elementos del carrito
    document.getElementById("itemsCarrito").innerHTML+=`
    <tr>
    <th scope="row">${carrito.length}</th>
    <td>${agregar.nombre}</td>
    <td>${agregar.cantidad}</td>
    <td>${agregar.precio}</td>
    <td><button id="eliminar${agregar.id}" class="btn btn-outline-danger"><i class="fa-solid fa-trash-can"></i></button></td>
    </tr>
    `;
          //Agregando evento a cada boton del carrito por cada producto
          // document.getElementById(`eliminar${agregar.id}`).addEventListener("click",function(){eliminarProducto()});
    const eliminarProducto = document.getElementById(`eliminar${agregar.id}`);
    eliminarProducto.addEventListener("click", function(){
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: agregar.nombre+" "+'eliminado!',
            showConfirmButton: false,
            timer: 2500,
            toast : true
          })
   
}); 
}      
        
    

          //sumando precio total agregado al carrito 
    let sumaTotal = carrito.reduce((total, precio)=> total+precio.precio, 0);
    
          //verificando si hay objetos en carrito, de lo coantrario avisar que no tenemos productos
    if (carrito.length === 0){document.getElementById("footerModal").innerHTML =`
    <tr>
    <th scope="row" colspan="4">Carrito vacío - comience a comprar!</th>
    </tr>`
    }else{
    document.getElementById("footerModal").innerHTML =`
    <tr>
    <th scope="row" colspan="4">Total ${sumaTotal}</th>
    </tr>`
    } 
            

            //boton eliminar productos
        const eliminarProducto = (prodId) => {
          const item = carrito.find(() => agregar.id === prodId);
          const indice = carrito.indexOf(item);
          carrito.splice(indice, 1);

        }

        //boton vaciar carrito
        botonVaciarCarrito.addEventListener("click", () => {
          if(carrito.length === 0){
              Swal.fire('Todavía no has agregado nada!');
          }else{
              Swal.fire({
                  title: 'Se ha vaciado tu carrito!',
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })
          }
          carrito.length = 0;
        })

console.log(carrito)

 
