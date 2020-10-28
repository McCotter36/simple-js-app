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

for (let i = 0; i < pokemonList.length; i++) {
  if(pokemonList[i].height > 1.4){
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + 'm) -Oh my, that\'s huge! <br>')
  } else {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + 'm) <br>')
  }
}
