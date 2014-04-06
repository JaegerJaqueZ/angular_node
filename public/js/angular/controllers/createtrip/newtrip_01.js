var newtrip01Controllers = angular.module('newtrip01Controllers', []);

newtrip01Controllers.controller('newtrip01Ctrl', function ($scope, $http, createtripFactory, $modal) {
 
  $scope.places = createtripFactory.getPlaces();
  $scope.$watchCollection(
      // This is the listener function
      function() {
        // console.log(createtripFactory.getPlaces());
        return createtripFactory.getPlaces();
      },
      // This is the change handler
      function(newValue, oldValue) {
        if(newValue!==oldValue) {
          $scope.places = newValue;
        }
      }
      );

  //open modal for place that already put in places array in service
  $scope.open = function (place) {
    if(place == null){
      // console.log("TRUE");
      createtripFactory.setisEditingPlace(false);
      createtripFactory.clearChosenPlace();
    }
    else{
      //console.log("FALSE");
      createtripFactory.setisEditingPlace(true);
      createtripFactory.setChosenPlace(place);
    }
    var modalInstance = $modal.open({
      templateUrl: 'partials/newtrip_02.html',
      controller: newtrip02ModalInstanceCtrl,
      backdrop: false
    });
  };

  $scope.confirmTrip = function (){
    // console.log("Now you are using confirmPlace() function");
    // $scope.isDisabled = true;

    var myjson = {
      tripname:$scope.trip.name,
      description:$scope.trip.description,
      begindate:createtripFactory.getBeginDateTemp(),
      enddate:createtripFactory.getEndDateTemp(),
      trip_id:12345,
      // index:createtripFactory.getChosenTrip().index,
      user_id:111};

      console.log(myjson);


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
      // if(createtripFactory.getisEditingPlace() == false){
      //   createtripFactory.addPlacetoPlaces(myjson);          
      // }
      // else{         
      //   createtripFactory.updatePlace(myjson, myjson.index) 
      // }
      // $scope.cancel();
      // }).
      // error(function(data, status, headers, config) {
      //   $scope.isDisabled = false;
      //   alert("Place registration failed, please try again");
        // createtripFactory.addPlacetoPlaces(myjson);

      // });   

}
});

//=============================== Modal ===============================
// var newtrip02ModalCtrl = function ($scope, $modal, $log) {

//   $scope.open = function () {
//     var modalInstance = $modal.open({
//       templateUrl: 'partials/newtrip_02.html',
//       controller: newtrip02ModalInstanceCtrl,
//       backdrop: false
//     });
//   };
// };

var newtrip02ModalInstanceCtrl = function ($scope, $modalInstance, createtripFactory) {

  $scope.cancel = function () {
    // $modalInstance.windowClass = "modal out animated slideInLeft";
    createtripFactory.clearChosenPlace();
    $modalInstance.dismiss('cancel');

  };
};

////=============================== Date Picker ===============================
var DatepickerBeginCtrl = function ($scope, createtripFactory) {

  $scope.begindate = new Date();

  $scope.format = 'dd-MMMM-yyyy';

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };

  $scope.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 1
  };  

  $scope.changed = function(){
    console.log(createtripFactory.getBeginDateTemp());
    createtripFactory.setBeginDateTemp($scope.begindate.getTime());
    console.log(createtripFactory.getBeginDateTemp());
  }

};

var DatepickerEndCtrl = function ($scope, createtripFactory) {

  $scope.enddate = new Date();

  $scope.format = 'dd-MMMM-yyyy';

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.opened = true;
  };

  $scope.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 1
  };  

  $scope.changed = function(){
    createtripFactory.setEndDateTemp($scope.enddate.getTime());
  }

};