var pokemonList = [
    { 
        name: 'Bulbasaur', 
        height: 0.7, types: 
        ['grass', 'poison'] 
    },
    { 
        name: 'Charizard', 
        height: 1.7, 
        types: 'fire'
    },
    { 
        name: 'Squirtle', 
        height: 0.5, 
        types: 'water'
    } 
];

for (let i = 0; i < pokemonList.length; i++)
    document.write(pokemonList[i].name + pokemonList[i].height)
if (pokemonList[i].height > 1.0)
    document.write("Wow, that's big!")