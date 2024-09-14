const galeria = document.getElementById('galeria');
const carousel = (direccion) => {
    const options = {
        //Raiz de  lo que s eobserva
        root: document.querySelector('.galeria__carousel')
        //evitamos que el contenedor tenga espacios entre las imagenes
        , 
        rootMargin:'0px',
        //cuanto es el porcentaje de imagen visible para considerarse visible o oculta
        threshold: 0.9
    };

    //InterserctionObserver => la encarfade observer
    //Identifica los elmentos visibles
    const observer = new IntersectionObserver((entradas) =>{
        //Solo se trae los visibles
        const slidesVisibles = entradas.filter(entrada => {
            if(entrada.isIntersecting === true){
                return entrada;
            }
        });

        if(direccion === 'anterior'){
            const primerSlideVisble =  slidesVisibles[0];
            const indexslideVisble = entradas.indexOf(primerSlideVisble);

            if(indexslideVisble >= 1){
                entradas[indexslideVisble-1].target.scrollIntoView({
                    behavior: 'smooth'
                    , inline: 'end'
                });
            }
        }

        if(direccion === 'siguiente'){
            const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);
        
            if(indexUltimoSlideVisible < entradas.length - 1){
                entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth'
                    , inline: 'end'
                });
            }
        }

        //removemos el observador en los elmentos del carrusel
        const slides =  querySelectorAll('.galeria__carousel-slide')
        slides.forEach(slide => {
            observer.unobserve(slide);
        });
              
    }, options);

    

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach(slide => {
        //agregamos los elementos al observable.
        observer.observe(slide);
    })
};

export default carousel;