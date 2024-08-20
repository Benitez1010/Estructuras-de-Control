function DescuentoCoche(modelo, precio){

    let descuento = 0;
    switch(modelo){

        case "FORD FIESTA":
            descuento = 0.05;
            break;

        case "FORD FOCUS":
            descuento = 0.1;
            break;
        
        case "FORD ESCAPE":
            descuento = 0.2;
            break;

        default:
            descuento = 0;
            console.log("Categoría no válida.");

    }

    let precioDescuento = precio - (precio * descuento);
    return precioDescuento;
}

const PRECIO = 5000;
let modelo = "FORD ESCAPE";  // Cambiar este valor para probar con diferentes modelos

let precioFinal = DescuentoCoche(modelo, PRECIO);

// Mostrar los resultados en HTML
document.getElementById("modelo").innerText = "El modelo escogido es: " + modelo;
document.getElementById("precioInicial").innerText = "El precio del vehículo es: $" + PRECIO;
document.getElementById("precioFinal").innerText = "El precio final con el descuento aplicado es de: $" + precioFinal;