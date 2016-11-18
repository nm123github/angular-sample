var moduleName = 'TabOneComponent';
module.exports = moduleName;

angular.module(moduleName, [])
.component('tabOne', {
    bindings: { 
    },
    template: require('./tabOne.html'),
    controller: require('./TabOneController'),
    controllerAs: '$ctrl'	
});
