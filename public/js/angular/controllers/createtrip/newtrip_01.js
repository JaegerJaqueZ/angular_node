var newtrip01Controllers = angular.module('newtrip01Controllers', []);

newtrip01Controllers.controller('newtrip01Ctrl', function ($scope, $http, nameThisLocationService) {
  // $scope.places = {
  // obj1:{
  //   name:'koh wat'  
  //   },
  // obj2:{
  // name:'koh tuan' 
  //   }
  // };
  $scope.places = nameThisLocationService.getPlaces();
  $scope.$watchCollection(
      // This is the listener function
      function() {
        // console.log(nameThisLocationService.getPlaces());
        return nameThisLocationService.getPlaces();
      },
      // This is the change handler
      function(newValue, oldValue) {
        if(newValue!==oldValue) {
          $scope.places = newValue;
        }
      }
      );
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