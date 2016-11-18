var moduleName = 'MyTableService';
module.exports = moduleName;

angular.module(moduleName, [])
.factory('MyTableService', function() {
    return {
    	getRows: function(headers) {
    		return [{
    			id: 1,
    			firstname: 'Jill',
    			lastname: 'Smith',
    			age: 50
    		}, {
    			id: 2,
    			firstname: 'Eve',
    			lastname: 'Jackson',
    			age: 94
    		}, {
    			id: 3,
    			firstname: 'Joe',
    			lastname: 'Jackson',
    			age: 200
    		}];
    	}
    }
});