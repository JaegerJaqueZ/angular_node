// var createtripService = angular.module('createtripService', []);

// createtripService.service('nameThisLocationService', function(){

//     this.chosenplace = 
//     {venue:{
//     	name:''
//     }}
//     ;    

//     this.setChosenPlace = function(selectedplace){
//     	this.chosenplace = selectedplace;
//     }
//     this.getChosenPlace = function(){
//     	return this.chosenplace
//     }

// });

var createtripService = angular.module('createtripService', []);

createtripService.factory('nameThisLocationService', function(){

	var chosenplace = 
	{venue:{
		name:''
	}};

	var places = [
	{ name:'koh wat' },
	{ name:'koh tuan'}
	];

	function setChosenPlace(selectedplace){
		chosenplace = selectedplace;
		
		// this.chosenplace = selectedplace;
		// console.log(chosenplace);
	}

	function getChosenPlace(){
		return chosenplace;
	}

	function getPlaces(){
		return places;
	}

	function addPlacetoPlaces(obj){
		//places.push({name:'koh ped'});
		places.push(obj);
	}

	return{
		setChosenPlace: setChosenPlace,
		getChosenPlace: getChosenPlace,
		getPlaces: getPlaces,
		addPlacetoPlaces: addPlacetoPlaces
	}

});