function ObtenerEdades(turno, cantidad) {
    let edades = [];
    for (let i = 1; i <= cantidad; i++) {
        let edad = parseInt(document.getElementById(turno + i).value); //Se suma turno + i por que de esa manera llamamos digamos m1, m2, m3....
        edades.push(edad); //Añadimos los datos al arreglo
    }
    return edades;
}

function CalcularPromedios() {

    // Obtener edades de cada turno
    let edadesM = ObtenerEdades('m', 5); //almacenanaran los datos del arreglo
    let edadesT = ObtenerEdades('t', 6);
    let edadesN = ObtenerEdades('n', 11);

   // Calcular los promedios
    let sumaM = 0;
    for (let i = 0; i < edadesM.length; i++) {
        sumaM += edadesM[i];
    }
    let promedioM = sumaM / edadesM.length;

    let sumaT = 0;
    for (let i = 0; i < edadesT.length; i++) {
        sumaT += edadesT[i];
    }
    let promedioT = sumaT / edadesT.length;

    let sumaN = 0;
    for (let i = 0; i < edadesN.length; i++) {
        sumaN += edadesN[i];
    }
    let promedioN = sumaN / edadesN.length;


    // Determinar el mayor promedio
    let mayorPromedio = 'Mañana';
    if (promedioT > promedioM && promedioT > promedioN) {
        mayorPromedio = 'Tarde';
    } else if (promedioN > promedioM && promedioN > promedioT) {
        mayorPromedio = 'Noche';
    }

    // Mostrar los resultados
    document.getElementById('resultado').innerHTML = 
    "Promedio Mañana: " + promedioM + "<br>" +
    "Promedio Tarde: " + promedioT + "<br>" +
    "Promedio Noche: " + promedioN + "<br>" +
    "El mayor promedio es el turno de: " + mayorPromedio;

}
