import { cargarAnteriorSiguiente } from "./cargarImagen";
import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import carousel  from "./carousel";

const galeria = document.getElementById('galeria');

galeria.addEventListener('click', (event) => 
    {
        const  boton = event.target.closest('button');
        
        if(boton?.dataset?.accion === 'cerrar-galeria'){
            cerrarGaleria();
        }

        if(event.target.dataset.id){            
            slideClick(event);
        }

        if(boton?.dataset?.accion === 'siguiente-imagen'){
            cargarAnteriorSiguiente('siguiente');
        }

        if(boton?.dataset?.accion === 'anterior-imagen'){
            cargarAnteriorSiguiente('anterior');
        }

        if(boton?.dataset?.accion === 'siguiente-slide'){
            carousel('siguiente');
        }

        if(boton?.dataset?.accion === 'anterior-slide'){
            carousel('anterior');
        }


    });