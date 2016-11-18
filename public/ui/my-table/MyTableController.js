
var moduleName = 'MyTableController';
module.exports = moduleName;

angular.module(moduleName, [ require('./MyTableService') ])
.controller('MyTableController', function($scope, MyTableService) {
	this.rows = MyTableService.getRows();
	
});