var moduleName = 'TabTwoService';
module.exports = moduleName;

angular.module(moduleName, [])
.factory('TabTwoService', function() {
    return {
    	getCopy: function() {
    		return "Cras justo odio, dapibus ac facilisis in, egestas eget quam. \
    		Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, \
    		ut fermentum massa justo sit amet.";
    	}
    }
});