const urlApi = 'https://pokeapi.co/api/v2';


export async function getPokemon(name, callback, errorCallback) {
    const url = `${urlApi}/pokemon/${name}`;
    try {
        const response = await fetchData(url);

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

//obtiene le paginado de los pokemons
export async function getPagination(url, callback, errorCallback) {    
    try {
        const response = await fetchData(url);        
        // Obtener las URLs de los Pokémon y sus nombres
        const pokemonsNames = response.results.map(result => ({
            name: result.name
        }));
        
        const data = {
            total: response.count,
            next : response.next,
            previous: response.previous,
            pokemonsNames: pokemonsNames
        };

        callback(data);
    } catch (error) {
        errorCallback('No se pudo encontrar el Pokémon');
    }
}


export async function fetchData(url) {
        return await $.ajax({method: 'GET', url: url});    
}

