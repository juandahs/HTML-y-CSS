import * as pokemonService from './pokemonService.js';

//Se espera a que se cargue todo el documetno
document.addEventListener("DOMContentLoaded", function(){
    
    //Se obtiene controles
    const searchInput  = document.getElementById('searchInput');    
    const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click', async (event) => {
        
        try {
            //Si se esta realizando una busqueda vacia se coloca el foco en el input y se termina el proceso.
            if(searchInput.value === ''){
                console.log('vacio')
                searchInput.focus();
                return;
            }

            pokemonService.getPokemon(searchInput.value, handlePokemonData, handleError);

          
        } catch (error) {
            searchInput.value = '';
            searchInput.focus();
            console.error('Error al buscar el Pokémon:', error);
        }
    });

    function handlePokemonData(pokemonData) {
        $('.card-img-top').attr('src', pokemonData.img);
        $('.card-title').text(pokemonData.nombre);
        $('.card-text').text(`Este Pokémon es de tipo ${pokemonData.tipo}.`);

    }

    function handleError(){}
    

})
