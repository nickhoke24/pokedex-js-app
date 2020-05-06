var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
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
    pokemonRepository.loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showModal(pokemon) {
    var $modalContainer = document.querySelector("#modal-container");
    $modalContainer.innerHTML = "";
    // Create and add modal div
    var modal = document.createElement("div");
    modal.classList.add("modal");
    // Closing button in modal content
    var closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener('click', hideModal);
    // Pokemon name in modal
    var titleElement = document.createElement("h1");
    titleElement.innerText = pokemon.name.toUpperCase();
    // Pokemon image in modal
    var imageElement = document.createElement("img");
    imageElement.classList.add("modal-img");
    imageElement.setAttribute("src", pokemon.imageUrl);
    // Pokemon height in modal
    var heightElement = document.createElement("p");
    heightElement.innerText = "Height: " + pokemon.height;
    // Pokemon types in modal
    var typesElement = document.createElement("p");
    typesElement.innerText = "Types: " + pokemon.types + " ";
    // Append content to website
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(typesElement);
    $modalContainer.appendChild(modal);
    $modalContainer.classList.add("is-visible");
  }
  // Create hideModal function
  function hideModal() {
    var $modalContainer = document.querySelector("#modal-container");
    $modalContainer.classList.remove("is-visible");
  }
  // Click ESC to exit modal
  window.addEventListener("keydown", (e) => {
    var $modalContainer = document.querySelector("#modal-container");
    if (
      e.key === "Escape" &&
      $modalContainer.classList.contains("is-visible")
    ) {
      hideModal();
    }
  });
  // Click outside of modal to exit
  var $modalContainer = document.querySelector("#modal-container");
  $modalContainer.addEventListener("click", (e) => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

  return {
    add,
    getAll,
    addListItem,
    loadList,
    loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});