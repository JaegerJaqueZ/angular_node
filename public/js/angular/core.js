
var tripsterApp = angular.module('tripsterApp', [
	'ngRoute',
	'mytripControllers',
	'newtrip01Controllers',
	'newtrip02Controllers',
	'newtrip03Controllers',
	'ui.bootstrap'
	]);

tripsterApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/home', {
			templateUrl: 'partials/home.html'
		}).
		when('/mytrip', {
			templateUrl: 'partials/mytrip.html',
			controller: 'mytripCtrl'
		}).
		otherwise({
			redirectTo: '/home'
		});
	}]);