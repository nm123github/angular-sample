var moduleName = 'TabTwoComponent';
module.exports = moduleName;

angular.module(moduleName, [])
.component('tabTwo', {
    bindings: { 
    },
    template: require('./tabTwo.html'),
    controller: require('./TabTwoController'),
    controllerAs: '$ctrl'	
});
