var mytripControllers = angular.module('mytripControllers', []);

mytripControllers.controller('mytripCtrl', function ($scope, $http, createtripFactory) {
	
	// $http({method: 'GET', url: ).
	// success(function(data, status, headers, config) {
		// createtripFactory.setTrips(data.);
		$scope.trips = createtripFactory.getTrips();	
	// }).
	// error(function(data, status, headers, config) {
	// 	alert("Cannot load your trip(s), please try again");
	// });

	$scope.$watchCollection(
      // This is the listener function
      function() {
        // console.log(createtripFactory.getPlaces());
        return createtripFactory.getTrips();
      },
      // This is the change handler
      function(newValue, oldValue) {
        if(newValue!==oldValue) {
          $scope.trips = newValue;
        }
      }
      );

	$scope.open = function (trip) {
    if(place == null){
      // console.log("TRUE");
      createtripFactory.setisEditingTrip(false);
      createtripFactory.clearChosenTrip();
    }
    else{
      //console.log("FALSE");
      createtripFactory.setisEditingTrip(true);
      createtripFactory.setChosenTrip(trip);
      // createtripFactory.setPlaces(trip.places);      
    }
    var modalInstance = $modal.open({
      templateUrl: 'partials/newtrip_02.html',
      controller: newtrip02ModalInstanceCtrl,
      backdrop: false
    });
  };

});


//=============================== Modal ===============================
// var newtrip01ModalCtrl = function ($scope, $modal, $log) {

// 	$scope.open = function () {
// 		var modalInstance = $modal.open({
// 			templateUrl: 'partials/newtrip_01.html',
// 			controller: newtrip01ModalInstanceCtrl,
// 			backdrop: false
// 		});
// 	};
// };

var newtrip01ModalInstanceCtrl = function ($scope, $modalInstance, createtripFactory) {

	$scope.cancel = function () {
		createtripFactory.clearChosenPlace();
		createtripFactory.clearPlaces();
		$modalInstance.dismiss('cancel');
	};
};