
var tripsterApp = angular.module('tripsterApp', [
	'ngRoute',
	'tripsterControllers'
	]);

tripsterApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'Ctrl'
		}).
		when('/mytrip', {
			templateUrl: 'partials/mytrip.html',
			controller: 'Ctrl'
		}).
		otherwise({
			redirectTo: '/home'
		});
	}]);