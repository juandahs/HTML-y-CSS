import data from '../data/fotos';

const galeria = document.getElementById('galeria');
const cargarImagen  = (id, nombre, ruta, descripcion) =>
{
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

    
    let indexImagenActual;    
    fotos.forEach((element, i) => {        
        if(element.id === idImagenActual){
            indexImagenActual = i;   
        }
    });

    
    //colocar recuadro blanco
    if(galeria.querySelectorAll('.galeria__carousel-slide').lenght > 0){
        //eliminamos el recuadro de la imagen anterior.
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');

        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');

    }
}

const cargarAnteriorSiguiente =  (direccion)=> 
{    
    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);
    
    let indexImagenActual;    
    fotos.forEach((element, i) => {        
        if(element.id === idImagenActual){
            indexImagenActual = i;   
        }
    });

    if(direccion === 'siguiente'){
        //Se valida que si se pueda sumar un 1 
        if(fotos[indexImagenActual+1]){
            const {id, nombre, ruta, descripcion}  = fotos[indexImagenActual+1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }
    else{
        if(fotos[indexImagenActual-1]){
            const {id, nombre, ruta, descripcion}  = fotos[indexImagenActual-1];
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }    
};

export {cargarImagen, cargarAnteriorSiguiente};