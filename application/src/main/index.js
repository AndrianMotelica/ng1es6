import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './main.routes'

export default angular
    .module('es6.main', [uirouter])
    .config(routes)
    .name;