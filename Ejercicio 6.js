function calcularDescuento(origen, destino, precio) {
    let descuento = 0;

    if (origen == "Palma") {
        if (destino == "La Costa del Sol") {
            descuento = 0.05;
        } else if (destino == "Panchimalco") {
            descuento = 0.10;
        } else if (destino == "Puerto el Triunfo") {
            descuento = 0.15;
        } else {
            console.log("Destino no válido para descuento.");
        }
    } else {
        console.log("Origen no válido para descuento.");
    }

    // Calcular el precio final con el descuento
    let precioFinal = precio - (precio * descuento);
    return precioFinal;
}

const PRECIO = 200;
let origen = "Palma";
let destino = "Panchimalco"; //Intercambiar por La Costa del Sol o Puerto el Triunfo para probar lo demas

let precioConDescuento = calcularDescuento(origen, destino, PRECIO);

console.log("El precio original del viaje es: $" + PRECIO);
console.log("El viaje es desde " + origen + " hacia " + destino);
console.log("El precio final con el descuento aplicado es de: $" + precioConDescuento);
