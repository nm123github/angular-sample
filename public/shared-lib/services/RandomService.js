
var randomString = require('random-string');

module.exports = {
	getSuperRandom: function() {
		var x = 'super-random-' + randomString();
		return x;
	}
}