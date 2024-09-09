import * as pokemonService from './pokemonService.js';


//Se espera a que se cargue todo el documetno
document.addEventListener("DOMContentLoaded", function () {

    //Se obtiene controles
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    //Se cargan los primeros 6 pokemones
    pokemonService.getPagination(6, Load, handleError);

    //Evento para buscar un pokemon
    searchButton.addEventListener('click', async (event) => {

        try {
            //Si se esta realizando una busqueda vacia se coloca el foco en el input y se termina el proceso.
            if (searchInput.value === '') {
                console.log('vacio')
                searchInput.focus();
                return;
            }

            pokemonService.getPokemon(searchInput.value, createCard, handleError);


        } catch (error) {
            searchInput.value = '';
            searchInput.focus();
            console.error('Error al buscar el Pokémon:', error);
        }
    });

    //Carga el listado de los pokemones
    function Load(data) {
        data.pokemonsNames.forEach(pokemon => {
            pokemonService.getPokemon(pokemon.name, createCard, handleError);
        });
    }

    //Cargar tarjetas
    function createCard(pokemonData) {

        const cardContainer = document.getElementById('cardContainer');
        cardContainer.innerHTML += `
          <div class="col">
          <div class="card h-100">
            <input type="hidden" id="${pokemonData.id}">
            <img src="${pokemonData.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${pokemonData.nombre}</h5>
              <p class="card-text">Este Pokémon es de tipo ${pokemonData.tipo}.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>  
        </div>
        `;
    }

    //Manejo de errores
    function handleError() {
        searchInput.value = '';
        searchInput.focus();
    }


})
