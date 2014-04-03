var newtrip02Controllers = angular.module('newtrip02Controllers', []);

newtrip02Controllers.controller('newtrip02Ctrl', function ($scope, $http, nameThisLocationService) {

  $scope.value = nameThisLocationService.getChosenPlace().foursquare.name;
  $scope.description = nameThisLocationService.getChosenPlace().description;

  // place will follow the change in chosenplace in service 
  $scope.$watch(
      // This is the listener function
      function() {
        //console.log(nameThisLocationService.getChosenPlace());
        return nameThisLocationService.getChosenPlace();
      },
      // This is the change handler
      function(newValue, oldValue) {
        if(newValue!==oldValue) {
          $scope.value = newValue.foursquare.name;
        }
      }
      );


  $scope.confirmPlace = function (){
    // console.log("Now you are using confirmPlace() function");
    // $scope.isDisabled = true;
    var servicebegintime = nameThisLocationService.getBeginTime();
    var serviceendtime = nameThisLocationService.getEndTime();

    var myjson = {
      foursquare:nameThisLocationService.getChosenPlace().foursquare,
      description:$scope.description,
      begintime:servicebegintime.getTime(),
      endtime:serviceendtime.getTime(),
      trip_id:12345,
      index:1,
      user_id:111};

      // console.log(myjson);

      //var deferred = $q.defer(); don't forget to inject $q on the top

      // $http({
      //   method: 'POST', 
      //   url: 'http://158.108.143.84:3000/place/create',
      //   data: myjson,
      //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      // }).
      // success(function(data, status, headers, config) {
      //   //deferred.resolve(data);
      //   //console.log(data);
      //   //close modal
        nameThisLocationService.addPlacetoPlaces(myjson);
        $scope.cancel();
      // }).
      // error(function(data, status, headers, config) {
      //   //deferred.resolve(data);
      //   $scope.isDisabled = false;
      //   alert("Place registration failed, please try again");
        // nameThisLocationService.addPlacetoPlaces(myjson);

      // });   

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
var timepickerCtrl = function ($scope, nameThisLocationService) {

  $scope.begintime = new Date();
  $scope.endtime = new Date();

  //set start time to 00:00
  $scope.begintime.setHours( 0 );
  $scope.begintime.setMinutes( 0 );
  $scope.begintime.setSeconds( 0 );
  $scope.endtime.setHours( 0 );
  $scope.endtime.setMinutes( 0 );
  $scope.endtime.setSeconds( 0 );

  //set hour and minute step for each click
  $scope.hstep = 1;
  $scope.mstep = 15;

  //AM PM
  $scope.begintimeismeridian = true;
  $scope.toggleMode = function() {
    $scope.begintimeismeridian = ! $scope.begintimeismeridian;
  };
  $scope.endtimeismeridian = true;
  $scope.toggleMode = function() {
    $scope.endtimeismeridian = ! $scope.endtimeismeridian;
  };

  $scope.begintimechanged = function () {
    // console.log(nameThisLocationService.getBeginTime());
    nameThisLocationService.setBeginTime($scope.begintime);
    // console.log(nameThisLocationService.getBeginTime());
  };

  $scope.endtimechanged = function () {
    // console.log(nameThisLocationService.getEndTime());
    nameThisLocationService.setEndTime($scope.endtime);
    // console.log(nameThisLocationService.getEndTime());
  };
};
