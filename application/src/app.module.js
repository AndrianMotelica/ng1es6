import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './routes'
import main from './main'
import coindesk from './coindesk'

angular
    .module('es6', [uirouter, main, coindesk])
    .config(routes);