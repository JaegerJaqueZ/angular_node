function testCtrl($scope, $http) {
 
  $scope.penguinpedzii = function() {
    alert("test");
    $http({method: 'GET', url: 'https://http://158.108.143.84:3000/auth/facebook'}).
		success(function(data, status, headers, config) {
			condole.log(data);
		}).
		error(function(data, status, headers, config) {
			alert("error");
		});
  };
}