let pokemonRepository = (function() {
  let pokemonList = [
    {
      name: 'Ninetales',
      height: 1.1,
      types: ['fire'],
      abilities: ['Flash-fire', 'Drought']
    },
    {
      name: 'Gligar',
      height: 1.1,
      types: ['ground','flying'],
      abilities: ['Sand-veil', 'Immunity', 'Hyper-cutter']
    },
    {
      name: 'Girafarig',
      height: 1.5,
      types: ['psychic', 'normal'],
      abilities: ['Inner-focus', 'Early-bird', 'Sap-sipper']
    },
    {
      name: 'Fearow',
      height: 1.2,
      types: ['flying','normal'],
      abilities: ['Keen-eye','sniper']
    }
  ];

  function add(pokemon) {
    if (typeof pokemon === "object" && ("name", "height", "types", "abilities"  in pokemon)){
    pokemonList.push(pokemon);
  } else {
    console.log('Failed to add Pokemon');
  }
  };

  function getAll() {
    return pokemonList;
  };

  function addListItem(pokemon) {
    let newList = document.querySelector(".pokemon-list");
    let listItem = document.createElement('li');
    let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class');
      listItem.appendChild(button);
      newList.appendChild(listItem);
      button.addEventListener('click', function() {
        showDetails(pokemon);
      });
    }

  function showDetails(pokemon){
    console.log(pokemon)
  }



  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();


pokemonRepository.add({
      name: 'Pikachu',
      height: 0.5,
      types: ['lightning','Reynolds'],
      abilities: ['Electrocution','Sass']
    })

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);

  }) ();
