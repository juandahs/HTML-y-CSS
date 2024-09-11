import data  from './../data/fotos'
import { cargarImagen } from './cargarImagen'

const slideClick = (event) => {
    alert('eventro')
    let ruta, nombre, descripcion;
    const id = parseInt(e.target.dataset.id);
    const galeria =  document.getElementById(id);
    const categoriaActiva = galeria.dataset.categoriaActiva;

    data.fotos[categoriaActiva].forEach(foto => {
        if(foto.id === id){
            ruta =  foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });

    cargarImagen(id, nombre, ruta, descripcion);
}

export default slideClick;