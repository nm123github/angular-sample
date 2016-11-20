var moduleName = 'MyTableService';
module.exports = moduleName;

var randomservice = require('../../shared-lib/services/RandomService.js')

angular.module(moduleName, [])
.factory('MyTableService', function() {
    return {
    	getRows: function(headers) {
    		return [{
    			id: 1,
    			firstname: 'Jill',
    			lastname: 'Smith',
                random: randomservice.getSuperRandom(),
    			age: 50
    		}, {
    			id: 2,
    			firstname: 'Eve',
    			lastname: 'Jackson',
                random: randomservice.getSuperRandom(),
    			age: 94
    		}, {
    			id: 3,
    			firstname: 'Joe',
    			lastname: 'Jackson',
                random: randomservice.getSuperRandom(),
    			age: 200
    		}];
    	}
    }
});