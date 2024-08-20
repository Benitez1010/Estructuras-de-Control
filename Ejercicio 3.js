function calcularAumento({salario, categoria}) { //Nuevamente utilice llaves para los parametros, debem coincidir con los parametros de interes de mi objeto empleado
    let aumento;

    switch (categoria) {
        case 'A':
            aumento = 0.15;
            break;
        case 'B':
            aumento = 0.30;
            break;
        case 'C':
            aumento = 0.10;
            break;
        case 'D':
            aumento = 0.20;
            break;
        default:
            aumento = 0;
            console.log("Categoría no válida.");
    }

    let salarioConAumento = salario + (salario * aumento);
    return salarioConAumento;
}

let empleado = { //Datos de prueba, intercambiar para ir probando.
    nombre: "Rodrigo",
    salario: 1000,
    categoria: "A"
};

console.log("Nombre: " + empleado.nombre);
console.log("Salario inicial: $" + empleado.salario);
console.log("Categoría: " + empleado.categoria);
console.log("Salario con aumento: $" + calcularAumento(empleado));
