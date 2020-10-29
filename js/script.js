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

function printArrayDetails(list){
  for (let i = 0; i < list.length; i++) {
    if(list[i].height > 1.4){
      document.write('<p>' + list[i].name + ' (height: ' + list[i].height + 'm) -Oh my, that\'s huge! </p>')
    } else {
      document.write('<p>' + list[i].name + ' (height: ' + list[i].height + 'm) </p>')
    }
  }
}

printArrayDetails(pokemonList);
