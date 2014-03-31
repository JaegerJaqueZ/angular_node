var newtrip01Controllers = angular.module('newtrip01Controllers', []);

newtrip01Controllers.controller('newtrip01Ctrl', function ($scope, $http) {

});

var newtrip02ModalCtrl = function ($scope, $modal, $log) {

  $scope.open = function () {
    var modalInstance = $modal.open({
      templateUrl: 'partials/newtrip_02.html',
      controller: newtrip02ModalInstanceCtrl,
      backdrop: false
    });
  };
};

var newtrip02ModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};