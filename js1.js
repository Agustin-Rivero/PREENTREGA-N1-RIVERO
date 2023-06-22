function juego(random){
alert("Para acceder a la oferta gana en el juego Piedra,papel o tijera");
let seleccion = prompt("Selecione piedra, papel o tijera");
        switch (seleccion){
            case "piedra":
                alert("seleccionaste piedra")
                var eleccion = 1
                var random = parseInt(Math.random()*3)
                alert ("random es" + random)
                if (eleccion==random){
                   alert("empate, intenta de nuevo")
                   juego();
                }else{
                if(eleccion+1==random){
                alert("perdiste, intenta de nuevo")
                juego();}
                else{alert("ganaste")
                alert("Felicidades ganaste un 10% de descuento");}
                }
                break;
            case "papel":
                alert("seleccionaste papel")
                var eleccion = 2
                var random = parseInt(Math.random()*3)
                alert ("random es" + random)
                if (eleccion==random){
                   alert("empate")
                   juego();
                }else{
                if(eleccion-1==random){
                alert("perdiste, intenta de nuevo")
                juego();}
                else{alert("ganaste")
                alert("Felicidades ganaste un 10% de descuento");}
                }
                break;
            case "tijera":
                var eleccion = 0
                alert("seleccionaste tijera")
                var random = parseInt(Math.random()*3)
                
                if (eleccion==random){
                   alert("empate")
                   juego();
                }else{
                if(eleccion+1==random){
                alert("perdiste, intenta de nuevo")
                juego();}
                else{alert("ganaste")
                alert("Felicidades ganaste un 10% de descuento");}
                }

                break;
                default:
                    alert("opcion invalida");
                
        
                }
            }
let aceptar =confirm("Bienvenido a la tienda de juegos para continuar pulse aceptar")
    if(aceptar== true)
    {
        alert("Opcion 1 para obtener una oferta" + " Opcion 2 para ver juegos");
        let opcion = prompt("Ingrese la opcion deseada 1 o 2");
switch (opcion){
    case "1":
           juego();
                        
break;

    case "2":
        alert("el valor total del juego es $4000")
}
}
else {alert("vuelva pronto")}


