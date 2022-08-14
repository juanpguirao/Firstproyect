const clasesx8 = {
    id:1,
    nombre: "Pack de 8 clases",
    descripcion: "Pack de 8 clases para usar cuando vos quieras, vencimiento 1 mes",
    vencimiento: "Vencimiento 1 mes",
    precio: 2500,
} 
const clasesx12 = {
    id:1,
    nombre: "Pack de 12 clases",
    descripcion: "Pack de 12 clases para usar cuando vos quieras, vencimiento 1 mes",
    vencimiento: "Vencimiento 1 mes",
    precio: 2800,
} 
const clasesx15 = {
    id:1,
    nombre: "Pack de 15 clases",
    descripcion: "Pack de 15 clases para usar cuando vos quieras, vencimiento 1 mes",
    vencimiento: "Vencimiento 1 mes",
    precio: 3000,
} 

let packs = document.getElementById("shop");
packs.innerHTML=`
<div class="list-group">
        <a href="#" class="list-group-item list-group-item-action" aria-current="true">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${clasesx8.nombre}</h5>
            <small>$${clasesx8.precio}</small>
          </div>
          <p class="mb-1">${clasesx8.descripcion}.</p>
          <small>${clasesx8.vencimiento}</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${clasesx12.nombre}</h5>
            <small class="text-muted">${clasesx12.precio}</small>
          </div>
          <p class="mb-1">${clasesx12.descripcion}</p>
          <small class="text-muted">${clasesx12.vencimiento}</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${clasesx15.nombre}</h5>
            <small class="text-muted">${clasesx15.precio}</small>
          </div>
          <p class="mb-1">${clasesx15.descripcion}</p>
          <small class="text-muted">${clasesx15.vencimiento}</small>
        </a>
      </div>
`;