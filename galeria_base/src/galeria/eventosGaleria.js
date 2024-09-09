import { cargarAnteriorSiguiente } from "./cargarImagen";
import cerrarGaleria from "./cerrarGaleria";

const galeria = document.getElementById('galeria');

galeria.addEventListener('click', (event) => 
    {
        const  boton = event.target.closest('button');
        
        if(boton?.dataset?.accion === 'cerrar-galeria'){
            cerrarGaleria();
        }
        if(boton?.dataset?.accion === 'siguiente-imagen'){
            cargarAnteriorSiguiente('siguiente');
        }

        if(boton?.dataset?.accion === 'anterior-imagen'){
            cargarAnteriorSiguiente('anterior');
        }

    });