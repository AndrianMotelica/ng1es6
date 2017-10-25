routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('coindesk', {
            url: '/coindesk',
            template: require('./coindesk.html'),
            resolve:  {coins: ['CoindeskService', (CoindeskService) => {
                return CoindeskService.getData();
            } ]}
        })
}