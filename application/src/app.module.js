import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './routes'
import pokemons from './pokemons'

angular
    .module('es6', [uirouter, pokemons])
    .config(routes);