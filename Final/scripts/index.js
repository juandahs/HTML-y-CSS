import * as pokemonService from './pokemonService.js';
import config from '../appSettings.js';
;

// Se espera a que se cargue todo el documento
document.addEventListener("DOMContentLoaded", function () {
    // Se obtienen los controles
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const nextButton = document.getElementById('nextButton');
    const previusButton = document.getElementById('previousButton');
    const cardContainer = document.getElementById('cardContainer');

    let cards = [];
    let totalPokemon;
    let urlNext;
    let urlPrevious;
    
    

    // Se cargan los primeros 6 Pokémon
    pokemonService.getPagination(config.urlBase+config.endPointPaginadoBase, loadPokemons, handleError);

    // Evento para buscar un Pokémon
    searchButton.addEventListener('click', async (event) => {
        try {
            // Si se está realizando una búsqueda vacía, se coloca el foco en el input y se termina el proceso
            if (searchInput.value === '') {
                searchInput.focus();
                return;
            }

            await pokemonService.getPokemon(searchInput.value, createCard, handleError);
        } catch (error) {
            searchInput.value = '';
            searchInput.focus();
            console.error('Error al buscar el Pokémon:', error);
        }
    });

    //Evento del boton siguiente.
    nextButton.addEventListener('click', (e) => {
        e.preventDefault()
        cards = [];        
        pokemonService.getPagination(urlNext, loadPokemons, handleError);
    });

    //Evento del boton anterior
    previusButton.addEventListener('click', (e) => {
        e.preventDefault();
        cards = [];           
        pokemonService.getPagination(urlPrevious, loadPokemons, handleError);
    });

    // Cargar el listado de los Pokémon
    function loadPokemons(data) {
        totalPokemon = data.total;
        urlNext = data.next;
        urlPrevious = data.previous;
        data.pokemonsNames.forEach(pokemon => {
            pokemonService.getPokemon(pokemon.name, addCard, handleError);
        });
    }

    // Agregar tarjeta a la lista organizada
    function addCard(pokemonData) {
        cards.push(pokemonData);
        cards.sort((a, b) => a.id - b.id); // Ordenar las tarjetas por id
        renderCards();
    }

    // Renderizar tarjetas en el contenedor
    function renderCards() {
        cardContainer.innerHTML = '';
        cards.forEach(pokemon => {
            cardContainer.innerHTML += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${pokemon.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${pokemon.nombre}</h5>
                            <p class="card-text">Este Pokémon es de tipo ${pokemon.tipo}.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Crear tarjeta y añadirla a la lista
    function createCard(pokemonData) {
        addCard(pokemonData);
    }

    // Manejo de errores
    function handleError() {
        searchInput.value = '';
        searchInput.focus();
    }
});
