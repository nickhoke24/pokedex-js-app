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
      types: ["fire"],
    },
    {
      name: "Squirtle",
      height: 0.5,
      types: ["water"],
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    }
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
  var pokedexList = document.querySelector(".pokemon-list");
  var listitem = document.createElement("li");
  var button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("pokemon-button");
  listitem.appendChild(button);
  pokedexList.appendChild(listitem);
});

//   document.write(pokemon.name + " (Height " + pokemon.height + ")");
//   if (pokemon.height > 1.0) {
//     document.write(" - Wow, that's big!");
//   }
//   document.write("<br>");
// });
