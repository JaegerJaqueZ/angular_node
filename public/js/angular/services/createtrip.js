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

	//=============================== Place and Places ===============================
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

	//=============================== Time Picker for each place ===============================
	var beginTime = new Date();

	function getBeginTime(){
		return beginTime;
	}

	function setBeginTime(time){
		beginTime = time;
	}

	//=============================== Factory Return ===============================
	return{
		setChosenPlace: setChosenPlace,
		getChosenPlace: getChosenPlace,
		getPlaces: getPlaces,
		addPlacetoPlaces: addPlacetoPlaces,
		getBeginTime: getBeginTime,
		setBeginTime: setBeginTime
	}

});