routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('index', {
            url: '/index',
            template: require('./main.html')
        })
}