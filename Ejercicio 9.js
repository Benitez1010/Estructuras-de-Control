function ConversionTemperatura(gradosC){
    let gradosF = (gradosC*(9/5)) + 32;

    if(gradosF>= 14 && gradosF<32){
        console.log(gradosF + "°F Temperatura Baja");
    }
    else if(gradosF>= 32 && gradosF<68){
        console.log(gradosF + "°F Temperatura adecuada");
    }
    else if(gradosF>= 68 && gradosF<96){
        console.log(gradosF + "°F Temperatura Alta");
    }
    else{
        console.log("Temperatura Desconocida");
    }

    return
}

let grados = 32; //Intercambiar valor de la temperatura en grados celcius

console.log("Valor ingresado de grados en celcius es: " + grados + "°C");
ConversionTemperatura(grados);