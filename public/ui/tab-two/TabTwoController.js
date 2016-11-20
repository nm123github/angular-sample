
var moduleName = 'TabTwoController';

angular.module(moduleName, [ require('./TabTwoService') ])
.controller('TabTwoController', function($scope, TabTwoService) {
	this.headers = ['id', 'first name', 'last name', 'random', 'age'];

});

module.exports = moduleName;

