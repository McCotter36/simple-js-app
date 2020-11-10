let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  };

  function getAll() {
    return pokemonList;
  };

  function addListItem(pokemon) {
    let newList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class');
      listItem.appendChild(button);
      newList.appendChild(listItem);
      button.addEventListener('click', function(event) {
        showDetails(pokemon);
      });
    }

    function showDetails(pokemon){
      loadDetails(pokemon).then(function () {
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
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    };

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.name = details.name;
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.abilities = details.abilities;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
    };

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails

  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
  });

  //==========================Show Modal==================================

      function showModal(pokemon) {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerHTML = '';
        modalContainer.classList.add('is-visible');

        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener ('click', hideModal);

        let nameElement = document.createElement('h1');
        nameElement.classList.add('modal-title');
        nameElement.innerText = pokemon.name;

//=========types and abilities need to be returned differently (stringified???)===========

        // let abilitiesElement = document.createElement('p');
        // abilitiesElement.classList.add('modal-body');
        // abilitiesElement.innerText = 'Abilities: ' + pokemon.abilities;
        //
        // let typesElement = document.createElement('p');
        // typesElement.classList.add('modal-body');
        // typesElement.innerText = 'Types: ' + pokemon.abilities;

        //Height content
        let heightElement = document.createElement('p');
        heightElement.classList.add('modal-body');
        heightElement.innerText = 'Height: ' + pokemon.height;

        //Image content
        let imageElement = document.createElement('img');
        imageElement.classList.add('modal-body');
        imageElement.src = pokemon.imageUrl;

        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(heightElement);
        modal.appendChild(imageElement);
        // modal.appendChild(abilitiesElement);
        // modal.appendChild(typesElement);
        modalContainer.appendChild(modal);

        modalContainer.addEventListener('click', (e) => {
          let target = e.target;
          if (target === modalContainer) {
            hideModal();
          }
        });

        window.addEventListener ('keydown', (e) => {
          let modalContainer = document.querySelector('#modal-container');
          if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
            hideModal();
          }    
    });

      let dialogPromiseReject;

      function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');

        if (dialogPromiseReject) {
          dialogPromiseReject();
          dialogPromiseReject = null;
        };
      };
    };
