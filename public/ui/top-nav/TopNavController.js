
var moduleName = 'TopNavController';

angular.module(moduleName, [ require('./TopNavService') ])
.controller('TopNavController', function($scope, TopNavService) {
	this.menuitems = TopNavService.getMenuItems();

});

module.exports = moduleName;
