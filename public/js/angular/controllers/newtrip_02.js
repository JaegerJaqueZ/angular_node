var newtrip02Controllers = angular.module('newtrip02Controllers', []);

newtrip02Controllers.controller('newtrip02Ctrl', function ($scope, $http, nameThisLocationService) {
  $scope.$watch(
      // This is the listener function
      function() {
        return nameThisLocationService.chosenplace
      },
      // This is the change handler
      function(newValue, oldValue) {
        if(newValue!==oldValue) {
          $scope.value = newValue.venue.name;
        }
      }
    );

  $scope.confirmPlace = function (){
    console.log("Now you are using confirmPlace() function");
    var chosenplace = nameThisLocationService.getPlace();
    // console.log(chosenplace.venue.id);
    // console.log(chosenplace.venue.name);
    // console.log(chosenplace.venue.location);
    // console.log(chosenplace.venue.rating);    
    // console.log($scope.description);
    var myjson = {
      foursquare:{id:chosenplace.venue.id,name:chosenplace.venue.name,location:chosenplace.venue.location,rating:chosenplace.venue.rating},
      description:$scope.description};
    //console.log(myjson);
    $http({
      method: 'POST', 
      url: 'http://158.108.143.84:3000/place/create',
      data: myjson
    }).
    success(function(data, status, headers, config) {
      console.log(data);
    }).
    error(function(data, status, headers, config) {
      alert("error");
    });   
    //close modal
    $scope.cancel();
  }
});

var newtrip03ModalCtrl = function ($scope, $modal, $log) {

  $scope.open = function () {
    var modalInstance = $modal.open({
      templateUrl: 'partials/newtrip_03.html',
      controller: newtrip03ModalInstanceCtrl,
      backdrop: true
    });
  };
};

var newtrip03ModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};