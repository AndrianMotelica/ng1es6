import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './pokemons.routes.js'
import pokemonList from './pokemon-list/pokemon-list.component'
import PokemonService from './pokemons.service'

export default angular
    .module('es6.pokemons', [uirouter])
    .config(routes)
    .component('pokemonList', pokemonList)
    .service('PokemonService', PokemonService)
    .name;