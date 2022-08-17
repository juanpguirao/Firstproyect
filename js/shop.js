let carrito=[];

if(localStorage.getItem("carrito")){
  carrito=JSON.parse(localStorage.getItem("carrito"));
  
}
class listado {
  constructor (id,nombre,descripcion,vencimiento, precio){
  this.id = id;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.vencimiento = vencimiento;
  this.cantidad = parseFloat(cantidad);
  this.precio= parseFloat(precio);
}
}

//MOSTRANDO LOS PRODUCTOS UNO POR UNO 
const packs = document.getElementById('shop');
  const mostrar =()=>{
    for(var producto of productos){

      packs.innerHTML +=
      `<div class="list-group" >
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

}
//Renderiza funcion
mostrar();

productos.forEach(producto => {
  //evento individial para cada boton
  document.getElementById(`boton${producto.id}`).addEventListener("click",function(){agregarAlCarrito(producto)});
 })


function agregarAlCarrito(agregar){ 
    carrito.push(agregar);
    alert("Tu: "+ agregar.nombre +" se han sumado al carro");
    document.getElementById("checkout").innerHTML+=`
    <tr>
    <th scope="row">${carrito.length}</th>
    <td>${agregar.nombre}</td>
    <td>${agregar.cantidad}</td>
    <td>${agregar.precio}</td>
    </tr>
    `;
}




