
var moduleName = 'TopNavController';
module.exports = moduleName;

angular.module(moduleName, [ require('./TopNavService') ])
.controller('TopNavController', function($scope, TopNavService) {
	this.menuitems = TopNavService.getMenuItems();

});