var createtripService = angular.module('createtripService', []);

createtripService.service('nameThisLocationService', function($http){

    this.chosenplace = 
    {venue:{
    	name:''
    }}
    ;    

    this.setPlace = function(selectedplace){
    	this.chosenplace = selectedplace;
    }
    this.getPlace = function(){
    	return this.chosenplace
    }

});