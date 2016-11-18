var moduleName = 'TopNavComponent';
module.exports = moduleName;

angular.module(moduleName, [])
.component('topNav', {
    bindings: { 
    },
    template: require('./topNav.html'),
    controller: require('./TopNavController'),
    controllerAs: '$ctrl'	
});
