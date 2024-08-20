function ValoresIngresados(valores) { //Recibe un arreglo de valores como parametro
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    // Recorrer los valores ingresados
    for (let i = 0; i < valores.length; i++) { // se usa menor que por que si no, sobrepasa el tamaño del arreglo
        let valor = valores[i]; //Le pasamos el valor del arreglo en esa posicion a esa variable

        if (valor < 0) {
            negativos++;
        }

        if (valor > 0) {
            positivos++;
        }

        if (valor % 15 === 0) {
            multiplosDe15++;
        }

        if (valor % 2 === 0) {
            sumaPares += valor;
        }
    }

    return {        //Acceder a las variables como un objeto, otra forma es retornar un arreglo y acceder a ellas mediante una posición...
        negativos,
        positivos,
        multiplosDe15,
        sumaPares
    };    
}

let valores = [15, -30, 20, -45, 0, 90, 16, -2, 8, 75]; //Arreglo de enteros

let resultado = ValoresIngresados(valores);

console.log("Cantidad de valores negativos: " + resultado.negativos); //Se debe poner el resultados. para llamar a la variable de interes que deseamos imprimir
console.log("Cantidad de valores positivos: " + resultado.positivos);
console.log("Cantidad de múltiplos de 15: " + resultado.multiplosDe15);
console.log("Suma de valores pares: " + resultado.sumaPares);
