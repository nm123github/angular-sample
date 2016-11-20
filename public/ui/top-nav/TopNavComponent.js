var moduleName = 'TopNavComponent';

angular.module(moduleName, [])
.component('topNav', {
    bindings: { 
    },
    template: require('./topNav.html'),
    controller: require('./TopNavController'),
    controllerAs: '$ctrl'	
});

module.exports = moduleName;
