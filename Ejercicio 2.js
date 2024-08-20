function NotaFinal({ examen, tareas, asistencias, investigacion }) { //Añadir corchetes en los parametros para coincidir estos parametros con los de mi objeto alumno
    return examen * 0.20 + tareas * 0.40 + asistencias * 0.10 + investigacion * 0.30;
}

let alumno = {
    nombre: "Rodrigo",
    edad: 18,
    carnet: "k00002516",
    examen: 10,
    tareas: 10,
    asistencias: 7,
    investigacion: 8
};

console.log("Nombre: " + alumno.nombre);
console.log("Edad: " + alumno.edad);
console.log("Carnet: " + alumno.carnet);
console.log("La nota final es de: " + NotaFinal(alumno));
