function TablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del" + numero);
    for (let i = 1; i <= 10; i++) {
        console.log(numero + "X" + i + " = " + numero*i);
    }
}

let numero = 7; //Intercambiar numero para mostrar

TablaMultiplicar(numero);
