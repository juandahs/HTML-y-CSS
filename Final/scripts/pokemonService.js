const urlApi = 'https://pokeapi.co/api/v2';


export function getPokemon(name, callback, errorCallback) {
    const url = `${urlApi}/pokemon/${name}`;
    $.ajax({
        method: 'GET',
        url: url,
        success: (data) => {
            const pokemonData = {
                id: data.id,
                nombre: data.name,
                img: data.sprites.front_default,
                tipo: data.types.map(type => type.type.name).join(', ')
            };

            // Llama al callback con los datos del Pokémon
            callback(pokemonData);
        },
        error: (xhr, status, error) => {
            errorCallback('No se pudo encontrar el Pokémon');
        }
    });
}

//Obtiene los primeros 6 pokemones
export function getPagination(limit, callback, errorCallback) {
    const url = `${urlApi}/pokemon?limit=${limit}`;
    $.ajax({
        method: 'GET',
        url: url,
        success: (response) => {
            // Obtener las URLs de los Pokémon y sus nombres
            const pokemonsNames = response.results.map(results => ({
                name: results.name
            }));
            const data = {
                total: response.count,
                pokemonsNames: pokemonsNames
            }
            callback(data);
        }, error: (xhr, status, error) => {
            errorCallback('No se pudo encontrar el Pokémon');
        }
    });
}


