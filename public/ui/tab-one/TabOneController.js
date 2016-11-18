
var moduleName = 'TabOneController';
module.exports = moduleName;

angular.module(moduleName, [ require('./TabOneService') ])
.controller('TabOneController', function($scope, TabOneService) {
	this.copy = TabOneService.getCopy();

});