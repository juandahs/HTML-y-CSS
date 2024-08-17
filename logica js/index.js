/**
 * 3 servicios
 * Gasolina, montallantas,  lavadero
 * 
 * se van a manejar jornada de mañana y tarde
 * El programa se repite hasta que el usuairo lo diga.
 * 
 * informe final.
 *  - Valor producido por la gasolina = $$$
 *  - Valor producido montallantas  =   $$$
 *  - Valor producido en la mañana y en la tarde;
 *  - cantidad de servicios usados
 *  - numero de veces por jornanda
 *  - mostrar el servicio que más se presto en la mañana y en la tarde.
 */

//************************ */
//Declaración de variables
//************************ */
let setServicios = []
    , serviciosGasolina = []
    , serviciosMontallanta = []
    , serviciosLavadero = []
    , serviciosManana = []
    , serviciosTarde = []


let ejecutarPrograma = 1;
//1.Mañana,  2.Tarde
let inputJornada = 0
    //1.Gasolina, 2.Montallantas, 3.Lavadero
    , inputServicio = 0
    , inputValorServicio = 0;

while (ejecutarPrograma === 1) 
{
    //Secrea un objeto para almacenar la informacion del servicio
    let servicio = {
        jornada: 0,
        servicio: 0,
        valor: 0
    };

    //Ingreso de la jornada 
    while (true) {
        inputJornada = parseInt(prompt("Ingrese la jornada \n1.Mañana \n2.Tarde"));
        if (inputJornada === 1 || inputJornada === 2) {
            servicio.jornada = inputJornada;
            break;
        } else {
            alert('Entrada para la jornada no válida');
        }
    }

    //Ingreso del servicio
    while (true) {
        inputServicio = parseInt(prompt("Ingrese la descripción del servicio\n1.Gasolina\n2.Montallantas\n3.Lavadero"));
        if (inputServicio === 1 || inputServicio === 2 || inputServicio === 3) {
            servicio.servicio = inputServicio;
            break;
        } else {
            alert("Entrada para el servicio no válida");
        }
    }

    //Ingreso del valor del servicio
    while (true) {
        inputValorServicio = parseFloat(prompt("Ingrese el valor del servicio $:"));
        if (inputValorServicio > 0) {
            servicio.valor = inputValorServicio;
            break;
        } else {
            alert("Entrada al valor del servicio no válida.");
        }
    }

    //Se agrega el servicio al array de servicios
    setServicios.push(servicio);

    //Agregar el servicio a la jornada correspondiente
    //1.Mañana,  2.Tarde
    if (servicio.jornada === 1) {
        serviciosManana.push(servicio);
    } else {
        serviciosTarde.push(servicio);
    }

    //Se reinician banderas
    inputJornada = 0;
    inputServicio = 0;
    inputValorServicio = 0;

    ejecutarPrograma = parseInt(prompt("¿Desea ingresar otro servicio?\n1.Sí\nCualquier otro valor será tomado como NO."));
}

//Se separan por tipo de servicio
//1.Gasolina, 2.Montallantas, 3.Lavadero
serviciosGasolina = setServicios.filter(element => element.servicio === 1);
serviciosMontallanta = setServicios.filter(element => element.servicio === 2);
serviciosLavadero = setServicios.filter(element => element.servicio === 3);

//**********************************************************************
//                  Valor producido por cada servicio
//**********************************************************************
let mensaje = 'El valor total de los servicios de';
console.log(`${mensaje} Gasolina es $${obtenerTotal(serviciosGasolina)}`);
console.log(`${mensaje} Montallanta es $${obtenerTotal(serviciosMontallanta)}`);
console.log(`${mensaje} Lavadero es $${obtenerTotal(serviciosLavadero)}`);

//**********************************************************************
//                  Valor producido por cada jornada (pendiente)
//**********************************************************************
mensaje = 'el valor total de la jornada de la';
console.log(`${mensaje} mañana es $${obtenerTotal(serviciosManana)}`)
console.log(`${mensaje} tarde es $${obtenerTotal(serviciosTarde)}`)

//**********************************************************************
//             Cantidad de veces que se presto cada servicio
//**********************************************************************
mensaje = 'Cantidad total de servicios de',
console.log(`${mensaje} Gasolina: ${serviciosGasolina.length}`);
console.log(`${mensaje} Montallanta: ${serviciosMontallanta.length}`);
console.log(`${mensaje} Lavadero: ${serviciosLavadero.length}`);


//**********************************************************************
//          Cantidad de servicios prestados por jornada
//**********************************************************************
mensaje = 'La cantidad de servicios en la jornada de la';
console.log(`${mensaje} mañana es ${serviciosManana.length}`)
console.log(`${mensaje} tarde es s${serviciosTarde.length}`)

//**********************************************************************
//                  Servicio más solicitado por jornada
//**********************************************************************
mensaje =  'El servicio más prestado en la';
let servicioMasManana = obtenerServicioMasPrestado(serviciosManana);
console.log(`${mensaje} mañana fue: ${servicioMasManana}`);
let servicioMasTarde = obtenerServicioMasPrestado(serviciosTarde);
console.log(`${mensaje} tarde fue: ${servicioMasTarde}`);


//Obtiene el total de un array de servicios
//TODO: esto se puede hacer con el reduce...
function obtenerTotal(servicios) {
    
    if (servicios === 0)
        return 0;

    let total = 0;
    servicios.forEach(element => {
        total += element.valor;
    });
    return total;
}

//Obtiene los servicios más prestado de un array de servicios
function obtenerServicioMasPrestado(servicios) {
    
    //Se retorna si no hay valores
    if(servicios.length === 0)
        return "No se prestaron servicios";

    //Se almacenan la cantidad de servicios organizados
    //1.Gasolina, 2.Montallantas, 3.Lavadero
    let conteoServicios = [
        servicios.filter(element => element.servicio === 1).length,
        servicios.filter(element => element.servicio === 2).length,
        servicios.filter(element => element.servicio === 3).length
    ];

    //Se obtiene el maximo número de servicio
    let maxServicio = Math.max(...conteoServicios);

    //Conociendo el orden de los indices se obtienen los nombres de los servicios
    let nombresServicios = conteoServicios
        //Se encuentra el indice en el que se encuentra el valor mas alto de los servicios
        .map((valorActual, index) => valorActual === maxServicio ? index + 1 : null)
        //Se filtra toda la información nula
        .filter(servicio => servicio !== null)
        //Para cada iteración que queda  se busca el indice y se concatena con y
        .map(servicio =>
            servicio === 1 ? 'Gasolina' :
            servicio === 2 ? 'Montallantas' : 'Lavadero'
        ).join(' y ');

    return nombresServicios;
}
