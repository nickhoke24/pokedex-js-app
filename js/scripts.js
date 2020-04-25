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
})();

pokemonRepository.forEach(function (pokemon) {
  document.write(pokemon.name + " (Height " + pokemon.height + ")");
  if (pokemon.height > 1.0) {
    document.write(" - Wow, that's big!");
  }
  document.write("<br>");
});
