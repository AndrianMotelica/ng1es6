import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './coindesk.routes'
import closingCurrency from './closing-currency/closing-currency.component'
import CoindeskService from './coindesk.service'

export default angular
    .module('es6.coindesk', [uirouter])
    .config(routes)
    .component('closingCurrency', closingCurrency)
    .service('CoindeskService', CoindeskService)
    .name;