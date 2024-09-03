import dataFotos from "./data/fotos";

const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');
const {fotos} = dataFotos;
contenedorCategorias.addEventListener('click', event =>
    {        
        event.preventDefault();
        //Se valida si el click esta en la etiqueta a
        if(event.target.closest('a')){
            galeria.classList.add('galeria--active');
           //Eliminar scroll vertical del documento
           document.body.style.overflow = 'hidden';
           

        }
    }
);