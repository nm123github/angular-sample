
var moduleName = 'MyTableController';

angular.module(moduleName, [ require('./MyTableService') ])
.controller('MyTableController', function($scope, MyTableService) {
	this.rows = MyTableService.getRows();
	
});

module.exports = moduleName;
