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

  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

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

  function addListItem(pokemon = {}) {
    var pokedexList = document.querySelector(".pokemon-list");
    var listitem = document.createElement("li");
    var button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");
    listitem.appendChild(button);
    pokedexList.appendChild(listitem);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({
  name: "Pikachu",
  height: 0.3,
  types: ["electric"],
});
console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
