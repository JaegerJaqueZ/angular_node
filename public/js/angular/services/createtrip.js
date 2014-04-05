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

	//=============================== Check whether user is editing or adding new place===============================
	var isEditing = false;

	function setIsEditing(temp){
		isEditing = temp;
	}

	function getIsEditing(){
		return isEditing;
	}

	//=============================== Place and Places ===============================
	var chosenplace = {};

	// var places = [
	// { name:'koh wat' },
	// { name:'koh tuan'}
	// ];	

	var places = [
	{
		foursquare:{id:"4e4951d614959d51c187ac11",name:"วอร์มอัพ คาเฟ่",location:"Thailand",categories:"ผับบาร์",rating:7.3},
		description: "สะแด่วไปเลยครัฟพี่น้องงงง",
		begintime: 1396532315302, 
		endtime: 1396508400769, 
		trip_id:12345,
		index:0,
		user_id:111
	}
	];	

	function setChosenPlace(selectedplace){
		chosenplace = selectedplace;
		
		// this.chosenplace = selectedplace;
		// console.log(chosenplace);
	}

	function getChosenPlace(){
		return chosenplace;
	}

	function clearChosenPlace(){
		chosenplace = {
			foursquare:{id:'',name:'',location:'',categories:'',rating:''},
			description:'',
			begintime:null, 
			endtime:null, 
			trip_id:'',
			index:null,
			user_id:''
		};
	}

	function getPlaces(){
		return places;
	}

	function clearPlaces(){
		places = [];
	}

	function adjustPlaceObject(selectedplace){
		if(isEditing == true){
			return {
			foursquare:{id:selectedplace.venue.id,name:selectedplace.venue.name,location:selectedplace.venue.location,categories:selectedplace.venue.categories[0].name,rating:selectedplace.venue.rating},
			description:'',
			begintime:chosenplace.begintime, 
			endtime:chosenplace.endtime, 
			trip_id:'',
			index:chosenplace.index,
			user_id:''
			};
		}
		else{
			return {
				foursquare:{id:selectedplace.venue.id,name:selectedplace.venue.name,location:selectedplace.venue.location,categories:selectedplace.venue.categories[0].name,rating:selectedplace.venue.rating},
				description:'',
				begintime:null, 
				endtime:null, 
				trip_id:'',
				index:null,
				user_id:''
			};
		}
	}

	function addPlacetoPlaces(obj){
		//console.log(obj.index);
		obj.index = places.length;
		//console.log(obj.index);
		places.push(obj);
	}

	function updatePlace(obj, index){
		places[index] = obj;
	}
	//=============================== Time for each place ===============================
	var beginTimeTemp = null;

	var endTimeTemp = null;
	
	function getBeginTimeTemp(){
		return beginTimeTemp;
	}

	function setBeginTimeTemp(time){
		beginTimeTemp = time;
	}

	function getEndTimeTemp(){
		return endTimeTemp;
	}

	function setEndTimeTemp(time){
		endTimeTemp = time;
	}

	//=============================== Factory Return ===============================
	return{
		setChosenPlace: setChosenPlace,
		getChosenPlace: getChosenPlace,
		getPlaces: getPlaces,
		addPlacetoPlaces: addPlacetoPlaces,
		getBeginTimeTemp: getBeginTimeTemp,
		setBeginTimeTemp: setBeginTimeTemp,
		getEndTimeTemp: getEndTimeTemp,
		setEndTimeTemp: setEndTimeTemp,
		adjustPlaceObject: adjustPlaceObject,
		clearChosenPlace: clearChosenPlace,
		updatePlace: updatePlace,
		setIsEditing: setIsEditing,
		getIsEditing: getIsEditing,
		clearPlaces: clearPlaces
	}

});