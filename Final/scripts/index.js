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
    let urlNext;
    let urlPrevious;

    // Se cargan los primeros 8 Pokémon
    pokemonService.getPagination(config.urlBase + config.endPointPaginadoBase, loadPokemons, handleError);

    // Evento para buscar un Pokémon
    searchButton.addEventListener('click', async (event) => {
        try {
            if (searchInput.value === '') {
                searchInput.focus();
                return;
            }
            pokemonService.getPokemon(searchInput.value, showPopup, handleError);
        } catch (error) {
            console.error('Error al buscar el Pokémon:', error);
        }
    });


    function showPopup(pokemonData) {
        // Elimina el scroll
        document.body.style.overflow = 'hidden';
      
        const popupContainer = document.createElement('div');
        popupContainer.className = 'popup-container';
        document.body.appendChild(popupContainer);
      
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = `
          <div class="popup-content">
            <button class="close-button">&times;</button>
            <h2>${pokemonData.nombre}</h2>
            <p>Tipo: ${pokemonData.tipo}</p>           
            <img src="${pokemonData.img}" alt="${pokemonData.nombre}" class="popup-image">
          </div>
        `;
        popupContainer.appendChild(popup);
      
        const closeButton = popup.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
          // Eliminar todo lo relacionado con el popup
          popup.remove();
          popupContainer.remove();
          document.body.style.overflow = 'auto'; // Restaurar el scroll
        });
      }

    

    searchButton.addEventListener('click', async (event) => {
        try {
            if (searchInput.value === '') {
                searchInput.focus();
                return;
            }

            pokemonService.getPokemon(searchInput.value, handlePokemonFound, handlePokemonNotFound);
        } catch (error) {
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
// Renderizar tarjetas en el contenedor
function renderCards() {
    cardContainer.innerHTML = '';
    cards.forEach(pokemon => {
        cardContainer.innerHTML += `
            <div class="col">
                <div class="card h-100 pokemon-card" data-name="${pokemon.nombre}">
                    <img src="${pokemon.img}" class="card-img-top" alt="${pokemon.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${pokemon.nombre}</h5>
                        <p class="card-text">Este Pokémon es de tipo ${pokemon.tipo}.</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Agrega el evento de clic a todas las tarjetas después de que se hayan renderizado
    addClickEventToCards();
}

// Función para agregar el evento de clic a las tarjetas
function addClickEventToCards() {
    const pokemonCards = document.querySelectorAll('.pokemon-card'); // Selecciona todas las tarjetas
    
    pokemonCards.forEach(card => {
        card.addEventListener('click', (event) => {
            const pokemonName = card.getAttribute('data-name'); // Obtiene el nombre del Pokémon
            pokemonService.getPokemon(pokemonName, showPopup, handleError); // Llama a la función que ya tienes para mostrar el popup
        });
    });
}

    // Manejo de errores
    function handleError() {
        console.error('ocurrio un error dentro de la aplicacion')
        searchInput.value = '';
        searchInput.focus();
    }
});
