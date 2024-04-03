
function obtenerNombreUsuario() {
    let nombreUsuario = prompt("¡Bienvenido al simulador de caminatas!\nPor favor, ingrese su nombre de usuario:");
    alert("¡Hola, " + nombreUsuario + "! Este es un simulador donde puedes registrar la cantidad de kilómetros que caminas cada día de la semana.");
    return nombreUsuario;
}


let nombreUsuario = obtenerNombreUsuario();


const datosPorDia = [];


function mostrarDatosPorDia(datosPorDia) {
    console.log("Datos de cada día:");
    datosPorDia.forEach(function(dia) {
        console.log("Día:", dia.dia, "- Kilómetros caminados:", dia.kilometros);
    });
}


function obtenerDatosPorDia() {
    let continuar = true;
    while (continuar) {
        let dia = prompt("Ingrese el día de la semana (o 'fin' para terminar):").toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        if (dia === 'FIN') {
            continuar = false;
        } else if (['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO'].includes(dia)) {
            let kilometros = parseFloat(prompt("Ingrese la cantidad de kilómetros caminados el " + dia + ":"));
            if (!isNaN(kilometros)) {
                datosPorDia.push({ dia: dia, kilometros: kilometros });
            } else {
                console.log("¡Error! Por favor, ingrese un número válido de kilómetros.");
            }
        } else {
            console.log("¡Error! Por favor, ingrese un día de la semana válido.");
        }
    }
}


obtenerDatosPorDia();


mostrarDatosPorDia(datosPorDia);


function calcularTotalKilometros(datosPorDia) {
    let total = 0;
    datosPorDia.forEach(function(dia) {
        total += dia.kilometros;
    });
    return total;
}


function calcularPromedioKilometros(datosPorDia) {
    let total = calcularTotalKilometros(datosPorDia);
    return total / datosPorDia.length;
}


let totalKilometros = calcularTotalKilometros(datosPorDia);
console.log("Total de kilómetros caminados:", totalKilometros);


let promedioKilometros = calcularPromedioKilometros(datosPorDia);
console.log("Promedio de kilómetros caminados por día:", promedioKilometros);