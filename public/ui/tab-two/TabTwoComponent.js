var moduleName = 'TabTwoComponent';

angular.module(moduleName, [])
.component('tabTwo', {
    bindings: { 
    },
    template: require('./tabTwo.html'),
    controller: require('./TabTwoController'),
    controllerAs: '$ctrl'	
});

module.exports = moduleName;
