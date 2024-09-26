var numeroEntrada=0, factorial=0, opcion;
do {
    opcion=parseInt(prompt("Elija la opción que desea realizar: 1. Calcular factorial    2. Determinar si es par"));
    switch (opcion) {
        case 1:
            numeroEntrada=parseInt(prompt("Ingrese el numero al que le desea calcular el factorial"));
            for (let i = 1; i <= numeroEntrada; i++) {
                factorial=factorial*i;
            }
            alert(factorial + " es el factorial de "+ numeroEntrada)

            break;
        case 2:
            numeroEntrada=parseInt(prompt("Ingrese el numero que desea comprobar si es par"));    
            if ((numeroEntrada%2)==0) {
                alert(numeroEntrada + " es par ")
            } else {
                alert(numeroEntrada + " es impar ")
            }
            

            break;
        default:
            break;
    }
} while (condition);