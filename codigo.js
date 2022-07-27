

main();
function main(){
    let producto = parseInt( prompt("Elija el tipo de producto:\n1)invierno\n2)verano") );

    if( producto == 1)
    {
        //muestra invierno
        mostrar();
    }
    else if( producto == 2)
    {
        //verano
        mostrar();
    }
    else {
        alert("El valor  ingresado no es valido, por favor ingrese una nueva opcion")
        main();
    }
}


function mostrar()
{
    console.log ("Campera\nGuantes\nSweater\nBufanda\nChaleco");
}

function mostrar()
{
    console.log ("Ojotas\nMalla\nSweater\nBufanda\nChaleco");
}
