var moduleName = 'TabOneService';

angular.module(moduleName, [])
.factory('TabOneService', function() {
    return {
    	getCopy: function() {
    		return "Cras justo odio, dapibus ac facilisis in, egestas eget quam. \
    		Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, \
    		ut fermentum massa justo sit amet.";
    	}
    }
});

module.exports = moduleName;
