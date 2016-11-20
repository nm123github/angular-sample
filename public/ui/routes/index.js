var moduleName = 'Routes';

angular.module(moduleName, ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
        
    $stateProvider.state({
        name: 'tabone',
        url: '/tabone',
        template: '<tab-one></tab-one>'
        //template: '<h1>hello!!</h1>'
    });

    $stateProvider.state({
        name: 'tabtwo',
        url: '/tabtwo',
        template: '<tab-two></tab-two>'
    });

});

module.exports = moduleName;
