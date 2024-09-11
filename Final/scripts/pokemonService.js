const urlApi = 'https://pokeapi.co/api/v2';


export async function getPokemon(name, callback, errorCallback) {
    const url = `${urlApi}/pokemon/${name}`;
    try {
        const response = await $.ajax({
            method: 'GET',
            url: url
        });

        const pokemonData = {
            id: response.id,
            nombre: response.name,
            img: response.sprites.front_default,
            tipo: response.types.map(type => type.type.name).join(', ')
        };

        // Llama al callback con los datos del Pokémon
        callback(pokemonData);
    } catch (error) {
        errorCallback('No se pudo encontrar el Pokémon');
    }
}

//Obtiene los primeros 'limit' pokemones
export async function getPagination(limit, callback, errorCallback) {
    const url = `${urlApi}/pokemon?limit=${limit}`;
    try {
        const response = await $.ajax({
            method: 'GET',
            url: url
        });
        
        // Obtener las URLs de los Pokémon y sus nombres
        const pokemonsNames = response.results.map(result => ({
            name: result.name
        }));
        
        const data = {
            total: response.count,
            pokemonsNames: pokemonsNames
        };

        callback(data);
    } catch (error) {
        errorCallback('No se pudo encontrar el Pokémon');
    }
}


