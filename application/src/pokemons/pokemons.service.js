export default class PokemonService
{
    constructor($http) {
        this.$http = $http;
        this.apiUrl = 'https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json';
    }

    getPokemons() {
        return this.$http
            .get(this.apiUrl)
            .then(function (response) {
               return response.data;
            });
    }
}