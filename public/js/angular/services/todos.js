// js/services/todos.js
angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', function($http) {
		return {
			get : function() {
				return $http.get('...');
			},
			create : function(todoData) {
				return $http.post('...', todoData);
			},
			delete : function(id) {
				return $http.delete('...' + id);
			}
		}
	});



	// angular.module('myApp.services', [])
	//   .factory('githubService', function() {
	//     var serviceInstance = {};
	//     // Our first service
	//     return serviceInstance;
	//   });