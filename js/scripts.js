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

// for (var i = 0; i < pokemonList.length; i++) {
//   document.write(
//     pokemonList[i].name + (" (Height " + pokemonList[i].height) + ")"
//   );
//   if (pokemonList[i].height > 1.0) {
//     document.write(" - Wow, that's big!");
//   }
//   document.write("<br>");
// }

pokemonList.forEach(function (pokemon) {
  document.write(pokemon.name + " (Height " + pokemon.height + ")");
  if (pokemon.height > 1.0) {
    document.write(" - Wow, that's big!");
  }
  document.write("<br>");
});
