var moduleName = 'MyTableComponent';

angular.module(moduleName, [])
.component('myTable', {
    bindings: {
    	headers: '<'
    },
    template: require('./myTable.html'),
    controller: require('./MyTableController'),
    controllerAs: '$ctrl'	
});

module.exports = moduleName;

