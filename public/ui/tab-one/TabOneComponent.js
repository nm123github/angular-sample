var moduleName = 'TabOneComponent';

angular.module(moduleName, [])
.component('tabOne', {
    bindings: { 
    },
    template: require('./tabOne.html'),
    controller: require('./TabOneController'),
    controllerAs: '$ctrl'	
});

module.exports = moduleName;
