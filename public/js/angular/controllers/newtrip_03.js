var newtrip03Controllers = angular.module('newtrip03Controllers', []);

newtrip03Controllers.controller('newtrip03Ctrl', function ($scope, $http, nameThisLocationService) {
	//console.log("Now you are in newtrip03Ctrl");

	$scope.findPlace = function (){
		//console.log("Now you are using findPlace() function");

		$http({method: 'GET', url: 'https://api.foursquare.com/v2/venues/explore?client_id=FSEL5ZQNNTPR4RHCVJMQ53541XJPZM4LIHBCNJVBVHRJTE4O&client_secret=KBIQX2U1X4LZ5GWRSAELWH2CFSTPBBNK4NBQZCGB2KQE1ENQ&v=20130619&query=' + $scope.input.name + '&near=' + $scope.input.province}).
		success(function(data, status, headers, config) {
			$scope.foursqplaces = data.response.groups[0].items;
			//console.log($scope.foursqplaces);
		}).
		error(function(data, status, headers, config) {
			alert("error");
		});
	}	
	
	$scope.selectPlace = function (chosenplace){
		//console.log("Now you are using selectPlace() function");
		nameThisLocationService.setPlace(chosenplace);		
		//close modal
		$scope.cancel();
	}
});


var places = {name:'A',lat:13.90351,lng:100.52819,focus:true,draggable:false};