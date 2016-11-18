
var angular = require('angular');

var routes = require('./ui/routes');
var topnav = require('./ui/top-nav'); 
var tabone = require('./ui/tab-one');
var tabtwo = require('./ui/tab-two');

// just trying out require-globify!!
var constants = require('./shared-lib/constants/*.js', {mode: 'hash'});	

var myApp = angular.module('myApp', [require('angular-ui-router'), routes, topnav, tabone, tabtwo]);

console.log(constants.cnst_1.keys.forEach(function(val) {
	console.log(val);
}));
