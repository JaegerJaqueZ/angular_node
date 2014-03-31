var tripsterControllers = angular.module('tripsterControllers', []);



tripsterControllers.controller('Ctrl', function ($scope, $http) {



});

var ModalDemoCtrl = function ($scope, $modal, $log) {

  $scope.open = function () {
    var modalInstance2 = $modal.open({
      templateUrl: 'partials/newtrip_01.html',
      controller: ModalInstanceCtrl,
      backdrop: false
    });
  };
};

var ModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};