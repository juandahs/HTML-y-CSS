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


let servicio =  
{
    jornada: 0,
    servicio: 0,
    valor: 0
};

let ejecutarPrograma =  1;
    //1.Mañana,  2.Tarde
let inputJornada = 0
    //1.Gasolina, 2.Montallantas, 3.Lavadero
    , inputServicio = 0
    , inputValorServicio = 0;


while(ejecutarPrograma === 1) 
{
    //Ingreso de la jornada 
    while(inputJornada === 0 || inputJornada !== 1 || inputJornada !== 2)
    {
        inputJornada =  parseInt(prompt("Ingrese la jornada \n1.Mañana \n2.Tarde"));
        //Si la entrada no ex un valor valido se vuelve a preguntar
        if(inputJornada === 1 || inputJornada === 2)
        {
            servicio.jornada = inputJornada;
            break;
        }
        else
        {
            alert('Entrada para la jornada no valida');
        }
    }

    //Ingreso del servicio
    while(inputServicio === 0 
        || inputServicio !== 1 
        || inputServicio !== 2 
        || inputServicio !== 3)
    {
        inputServicio = parseInt(prompt("Ingrese la descripción del servicio\n1.Gasolina\n2.Montallantas\n3.Lavadero"));
        if(inputServicio === 1
            || inputServicio === 2
            || inputServicio === 3 )
        {
            servicio.servicio = inputServicio;
            break;
        }
        else
        {
            alert("Entrada para el servicio no valida", inputServicio);             
        }
    }
    
    //Ingreso del valor del servicio
    while(inputValorServicio === 0 || inputValorServicio < 0)
    {
        inputValorServicio = prompt("Ingrese el valor del servicio $:");
        if(inputServicio > 0)
        {
            servicio.valor = inputValorServicio;

            break;
        }
        else
        {
            alert("Entrada al valor del servicio invalida.");
        }
    }
    
    //Se agrega el servicio a el array de servicios
    setServicios.push(servicio);

    //Se reinician banderas
    inputJornada = 0;
    inputServicio = 0;
    inputValorServicio = 0;

    ejecutarPrograma = parseInt(prompt("¿Desea ingresar otro servicio?\n1.Sí\n2.No\nCualquier otro valor sera tomado como NO."));

    
}

//1.Gasolina, 2.Montallantas, 3.Lavadero
 setServicios.filter((element) => element.servicio === 1);
 
  //cantidad total de los servicios de Montallanta es $ ${serviciosMontallanta.length}`);.
console.log(`La cantidad total de los servicios de Lavadero es $ ${serviciosLavadero.lengt}`);
console.log(`El valor total de los servicios de Gasolina es $ ${obtenerTotal(serviciosGasolina)}`);
console.log(`El valor total de los servicios de Montallanta es $ ${obtenerTotal(serviciosMontallanta)}`);
console.log(`El valor total de los servicios de Lavadero es $ ${obtenerTotal(serviciosLavadero)}`);


/// Servicio más solicitado en la mañana
let conteoServiciosManana = [
    serviciosManana.filter(element => element.servicio === 1).length,
    serviciosManana.filter(element => element.servicio === 2).length,
    serviciosManana.filter(element => element.servicio === 3).length
];

let maxManana = Math.max(...conteoServiciosManana);
let servicioMasManana = conteoServiciosManana.indexOf(maxManana) + 1;
console.log(`El servicio más prestado en la mañana fue: ${servicioMasManana === 1 ? 'Gasolina' : servicioMasManana === 2 ? 'Montallantas' : 'Lavadero'}`);

// Servicio más solicitado en la tarde
let conteoServiciosTarde = [
    serviciosTarde.filter(element => element.servicio === 1).length,
    serviciosTarde.filter(element => element.servicio === 2).length,
    serviciosTarde.filter(element => element.servicio === 3).length
];

let maxTarde = Math.max(...conteoServiciosTarde);
let servicioMasTarde = conteoServiciosTarde.indexOf(maxTarde) + 1;
console.log(`El servicio más prestado en la tarde fue: ${servicioMasTarde === 1 ?'Gas olina' : servicioMasTarde === 2 ? 'Montallantas' : 'Lavadero'}`);

//Obtiene el total de los array
function obtenerTotal(setServicios)
{
    console.log(setServicios);

    total = 0;
    setServicios.forEach(element => {
        total += element.valor;
    });
    return total;
}
