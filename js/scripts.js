var pokemonRepository = (function () {
  var pokemonList = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "Charizard",
      height: 1.7,
      types: "fire",
    },
    {
      name: "Squirtle",
      height: 0.5,
      types: "water",
    },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + " (Height " + pokemon.height + ")");
  if (pokemon.height > 1.0) {
    document.write(" - Wow, that's big!");
  }
  document.write("<br>");
});
