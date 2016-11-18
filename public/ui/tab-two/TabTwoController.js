
var moduleName = 'TabTwoController';
module.exports = moduleName;

angular.module(moduleName, [ require('./TabTwoService') ])
.controller('TabTwoController', function($scope, TabTwoService) {
	this.headers = ['id', 'first name', 'last name', 'age'];

});
