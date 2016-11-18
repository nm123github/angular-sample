var moduleName = 'MyTableComponent';
module.exports = moduleName;

angular.module(moduleName, [])
.component('myTable', {
    bindings: {
    	headers: '<'
    },
    template: require('./myTable.html'),
    controller: require('./MyTableController'),
    controllerAs: '$ctrl'	
});
