var mytripControllers = angular.module('mytripControllers', []);

mytripControllers.controller('mytripCtrl', function ($scope, $http) {

});


//=============================== Modal ===============================
var newtrip01ModalCtrl = function ($scope, $modal, $log) {

	$scope.open = function () {
		var modalInstance = $modal.open({
			templateUrl: 'partials/newtrip_01.html',
			controller: newtrip01ModalInstanceCtrl,
			backdrop: false
		});
	};
};

var newtrip01ModalInstanceCtrl = function ($scope, $modalInstance, nameThisLocationService) {

	$scope.cancel = function () {
		nameThisLocationService.clearChosenPlace();
		nameThisLocationService.clearPlaces();
		$modalInstance.dismiss('cancel');
	};
};