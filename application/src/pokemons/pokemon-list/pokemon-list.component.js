function pokemonListCtrl() {
  console.log(this.pokemons);
}
module.exports = {
  template: require('./pokemon-list.html'),
  controller: pokemonListCtrl,
  bindings: {
    pokemons: '<'
  }
};