const galeria =  document.getElementById('galeria');

function cerrarGaleria()
{
    galeria.classList.remove('galeria--active');
    document.body.style.overflow = '';
}

export default cerrarGaleria;