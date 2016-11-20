
var moduleName = 'TabOneController';

angular.module(moduleName, [ require('./TabOneService') ])
.controller('TabOneController', function($scope, TabOneService) {
	this.copy = TabOneService.getCopy();

});

module.exports = moduleName;
