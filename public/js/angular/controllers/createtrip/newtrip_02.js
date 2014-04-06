var newtrip02Controllers = angular.module('newtrip02Controllers', []);

newtrip02Controllers.controller('newtrip02Ctrl', function ($scope, $http, createtripFactory) {

  $scope.value = createtripFactory.getChosenPlace().foursquare.name;
  $scope.description = createtripFactory.getChosenPlace().description;

  // place will follow the change in chosenplace in service 
  $scope.$watch(
      // This is the listener function
      function() {
        //console.log(createtripFactory.getChosenPlace());
        return createtripFactory.getChosenPlace();
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

    var myjson = {
      foursquare:createtripFactory.getChosenPlace().foursquare,
      description:$scope.description,
      begintime:createtripFactory.getBeginTimeTemp(),
      endtime:createtripFactory.getEndTimeTemp(),
      trip_id:12345,
      index:createtripFactory.getChosenPlace().index,
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
      // console.log(myjson.index);
      if(createtripFactory.getisEditingPlace() == false){
        createtripFactory.addPlacetoPlaces(myjson);          
      }
      else{         
        createtripFactory.updatePlace(myjson, myjson.index) 
      }
      $scope.cancel();
      // }).
      // error(function(data, status, headers, config) {
      //   //deferred.resolve(data);
      //   $scope.isDisabled = false;
      //   alert("Place registration failed, please try again");
        // createtripFactory.addPlacetoPlaces(myjson);

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
var timepickerCtrl = function ($scope, createtripFactory) {

  if(createtripFactory.getisEditingPlace() == false){
    $scope.begintime = new Date();
    $scope.endtime = new Date();

    //set start time to 00:00
    $scope.begintime.setHours( 0 );
    $scope.begintime.setMinutes( 0 );
    $scope.begintime.setSeconds( 0 );
    $scope.endtime.setHours( 0 );
    $scope.endtime.setMinutes( 0 );
    $scope.endtime.setSeconds( 0 );
  }
  else{
    $scope.begintime = new Date(createtripFactory.getChosenPlace().begintime);
    $scope.endtime = new Date(createtripFactory.getChosenPlace().endtime);
    createtripFactory.setBeginTimeTemp($scope.begintime.getTime());
    createtripFactory.setEndTimeTemp($scope.endtime.getTime());
    // console.log($scope.begintime);
    // console.log($scope.endtime);
  }

  $scope.begintimechanged = function () {
    // console.log(createtripFactory.getBeginTime());
    createtripFactory.setBeginTimeTemp($scope.begintime.getTime());
    // console.log(createtripFactory.getBeginTime());
  };

  $scope.endtimechanged = function () {
    // console.log(createtripFactory.getEndTime());
    createtripFactory.setEndTimeTemp($scope.endtime.getTime());
    // console.log(createtripFactory.getEndTime());
  };

  //AM PM
  $scope.begintimeismeridian = false;
  $scope.toggleMode = function() {
    $scope.begintimeismeridian = ! $scope.begintimeismeridian;
  };
  $scope.endtimeismeridian = false;
  $scope.toggleMode = function() {
    $scope.endtimeismeridian = ! $scope.endtimeismeridian;
  };

  //set hour and minute step for each click
  $scope.hstep = 1;
  $scope.mstep = 15;
  };
