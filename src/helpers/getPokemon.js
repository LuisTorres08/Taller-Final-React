export const getPokemon = (valorBusqueda) => {
    let pokemon = {
        id: 0,
        name: "",
        url: ''
    };

    const url = `https://pokeapi.co/api/v2/pokemon/${valorBusqueda}`;
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => (
        pokemon.id = data.id,
        pokemon.name = data.name,
        pokemon.url = data.sprites.front_default
    ))
    
    return pokemon;
}