var moduleName = 'TopNavService';

angular.module(moduleName, [])
.factory('TopNavService', function() {
    return {
    	getMenuItems: function() {
    		return [
    			{
    				itemname: 'Tab One',
    				itempath: 'tabone'
    			},
    			{
    				itemname: 'Tab Two',
    				itempath: 'tabtwo'
    			}
    		];
    	}
    }
});

module.exports = moduleName;
