var newtrip02Controllers = angular.module('newtrip02Controllers', []);

newtrip02Controllers.controller('newtrip02Ctrl', function ($scope, $http, nameThisLocationService) {

  $scope.$watch(
      // This is the listener function
      function() {
        //console.log(nameThisLocationService.getChosenPlace());
        return nameThisLocationService.getChosenPlace();
      },
      // This is the change handler
      function(newValue, oldValue) {
        if(newValue!==oldValue) {
          $scope.value = newValue.venue.name;
        }
      }
      );


  $scope.confirmPlace = function (){
    // console.log("Now you are using confirmPlace() function");
    $scope.isDisabled = true;
    var chosenplace = nameThisLocationService.getChosenPlace();
    var sbegintime = nameThisLocationService.getBeginTime();

    var myjson = {
      foursquare:{id:chosenplace.venue.id,name:chosenplace.venue.name,location:chosenplace.venue.location,categories:chosenplace.venue.categories[0].name,rating:chosenplace.venue.rating},
      description:$scope.description,
      begintime: sbegintime.getTime(),
      trip_id:12345,
      index:1,
      user_id:111};

      console.log(myjson);

      //var deferred = $q.defer(); don't forget to inject $q on the top

      $http({
        method: 'POST', 
        url: 'http://158.108.143.84:3000/place/create',
        data: myjson,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).
      success(function(data, status, headers, config) {
        //deferred.resolve(data);
        //console.log(data);
        //close modal
        $scope.cancel();
      }).
      error(function(data, status, headers, config) {
        //deferred.resolve(data);
        $scope.isDisabled = false;
        alert("Place registration failed, please try again");

      });   

      // var myDataPromise = deferred.promise.then(function(data){
      //   $scope.isDisabled = false;
      //   console.log(data);
      // });
    
  }
});



//=============================== Modal ===============================
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

//=============================== Time Picker ===============================
var TimepickerDemoCtrl = function ($scope, nameThisLocationService) {

  $scope.mytime = new Date();

  //set start time to 00:00
  $scope.mytime.setHours( 0 );
  $scope.mytime.setMinutes( 0 );

  //set hour and minute step for each click
  $scope.hstep = 1;
  $scope.mstep = 15;

  //AM PM
  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.changed = function () {
    nameThisLocationService.setBeginTime($scope.mytime);
    // console.log(nameThisLocationService.getBeginTime());
    // console.log('Time changed to: ' + $scope.mytime);
    // console.log($scope.mytime.getHours());
    // console.log($scope.mytime.getMinutes());
    // console.log($scope.mytime.getTime());
  };
};
