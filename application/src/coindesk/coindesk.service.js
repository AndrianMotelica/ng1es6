export default class CoindeskService
{
    constructor($http) {
        this.$http = $http;
        this.apiUrl = 'https://api.coindesk.com/v1/bpi/historical/close.json';
    }

    getData() {
        return this.$http
            .get(this.apiUrl)
            .then(function (response) {
               return response.data;
            });
    }
}