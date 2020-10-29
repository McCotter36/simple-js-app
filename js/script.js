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
    abilities: ['Keen-eye','sniper']},
];

function myLoopFunction(pokemon) {
    if(pokemon.height > 1.4){
      document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + 'm) -Oh my, that\'s huge! </p>');
    } else {
      document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + 'm) </p>');
    }
  }

pokemonList.forEach(myLoopFunction);
