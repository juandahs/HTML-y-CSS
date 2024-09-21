import dataFotos from "./data/fotos";
import {cargarImagen} from '../src/galeria/cargarImagen';

const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

//const {fotos} = dataFotos;
contenedorCategorias.addEventListener('click', event => {   
    event.preventDefault();
    //Se valida si el click esta en la etiqueta a
    if(event.target.closest('a')){
        galeria.classList.add('galeria--active');
        //Eliminar scroll vertical del documento
        document.body.style.overflow = 'hidden';
        //Extraer el id para buscar la imagen
        const categoriaActiva = event.target.closest('a').dataset.categoria;   
        const fotos = dataFotos.fotos[categoriaActiva];
 
        galeria.dataset.categoria = categoriaActiva;
        const {id, nombre, ruta, descripcion} = fotos[0];

        cargarImagen(id, nombre, ruta, descripcion);

        //cargar carrusel
        const carrusel = galeria.querySelector('.galeria__carousel-slides');
        carrusel.innerHTML = '';

        fotos.forEach(element => {
            const slide = `
                <a href="#" class="galeria__carousel-slide">
                    <img class="galeria__carousel-image" src="${element.ruta}"  datas-id="${element.id}"alt="" />
                </a>
            `;

            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });

        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active')
        }
    }
);