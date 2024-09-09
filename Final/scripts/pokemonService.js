const urlApi =  'https://pokeapi.co/api/v2';


export function getPokemon(pokemonName, callback, errorCallback) {
    const apiUrl = `${urlApi}/pokemon/${pokemonName.toLowerCase()}`;

    $.ajax({
        method: 'GET',
        url: apiUrl,
        success: (data) => {
            const pokemonData = {
                nombre: data.name,
                img: data.sprites.front_default,
                tipo: data.types.map(type => type.type.name).join(', ')
            };

            // Llama al callback con los datos del Pokémon
            callback(pokemonData);
        },
        error: (xhr, status, error) => {
            console.error('Error obteniendo el Pokémon:', error);

            // Llama al errorCallback con el mensaje de error
            if (errorCallback) {
                errorCallback('No se pudo encontrar el Pokémon');
            }
        }
    });
}



