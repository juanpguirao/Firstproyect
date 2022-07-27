
main();
function main(){
    let producto = parseInt( prompt("Elija el tipo de producto:\n1)Funcional \n2)Maquinas") );

    if( producto == 1)
    {
        //opcion iniciante
        let ticket1 = "Dos clase $2000\nTres Clases $2500\nCuatro Clases $2800\nCinco Clases $3200"
        mostrar(ticket1);
    }
    else if( producto == 2)
    {
        //verano
        let ticket2 = "Dos dias $1500\nTres dias $1800\nCuatro dias $2100\nCinco dias $2500"
        mostrar(ticket2);
    }
    else {
        alert("El valor  ingresado no es valido, por favor ingrese una nueva opcion")
        main(); //vuelve a llamar en caso de ingresar informacion incorrecta
    }
}


function mostrar(catalogo)
{
    console.log (catalogo);
}
