// var createtripService = angular.module('createtripService', []);

// createtripService.service('createtripFactory', function(){

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

createtripService.factory('createtripFactory', function(){
//++++++++++++++++++++++++++++++++++++++++++++++ Trip ++++++++++++++++++++++++++++++++++++++++++++++//
	//=============================== Check whether user is editing or adding new trip===============================
	var isEditingTrip = false;

	function setisEditingTrip(temp){
		isEditingTrip = temp;
	}

	function getisEditingTrip(){
		return isEditingTrip;
	}
	//=============================== Trip and Trips ===============================
	var trips = [
	{
		name:"เที่ยวไปปี้ไปกับอ๊อฟพิชยู้ตตต",
		description:"3วัน มันส์ตลอด",
		begindate:1396532315302,
		enddate:1396508400769,
		trip_id:12345,
		index:0,
		user_id:111
	}
	];

	function getTrips(){
		return trips;
	}

	var chosentrip = {};

	function setChosenTrip(selectedtrip){
		chosentrip = selectedtrip;
	}

	function getChosenTrip(){
		return chosentrip;
	}

	function clearChosenTrip(){
		chosentrip = {
			tripname:'',
			description:'',
			begindate:null,
			enddate:null,
			trip_id:'',
			index:null,
			user_id:''
		};		
	}

	//=============================== Date for each Trip ===============================
	var beginDateTemp = new Date();

	var endDateTemp = new Date();
	
	function getBeginDateTemp(){
		return beginDateTemp;
	}

	function setBeginDateTemp(date){
		beginDateTemp = date;
	}

	function getEndDateTemp(){
		return endDateTemp;
	}

	function setEndDateTemp(date){
		endDateTemp = date;
	}

//++++++++++++++++++++++++++++++++++++++++++++++ Place and Places ++++++++++++++++++++++++++++++++++++++++++++++//
	//=============================== Check whether user is editing or adding new place===============================
	var isEditingPlace = false;

	function setisEditingPlace(temp){
		isEditingPlace = temp;
	}

	function getisEditingPlace(){
		return isEditingPlace;
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
		if(isEditingPlace == true){
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
		//Trip
		getBeginDateTemp: getBeginDateTemp,
		setBeginDateTemp: setBeginDateTemp,
		getEndDateTemp: getEndDateTemp,
		setEndDateTemp: setEndDateTemp,
		setisEditingTrip: setisEditingTrip,
		getisEditingTrip: getisEditingTrip,
		getTrips: getTrips,
		setChosenTrip: setChosenTrip,
		getChosenTrip: getChosenTrip,
		clearChosenTrip: clearChosenTrip,

		//Place and Places
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
		setisEditingPlace: setisEditingPlace,
		getisEditingPlace: getisEditingPlace,
		clearPlaces: clearPlaces
	}

});