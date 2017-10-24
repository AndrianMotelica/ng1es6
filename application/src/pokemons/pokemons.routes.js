routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('index', {
            url: '/index',
            template: '<h1>Hola Compadres</h1>'
        })
        .state('pokemons', {
            url: '/pokemons',
            template: require('./pokemons.html'),
            resolve:  {pokemons: ['PokemonService', (PokemonService) => {
                return PokemonService.getPokemons();
            } ]}
        })
}