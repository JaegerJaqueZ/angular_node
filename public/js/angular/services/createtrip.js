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
	// var chosenplace = 
	// {
	// 	venue:{
	// 	name:''
	// 	}
	// };

	var chosenplace = 
	{
		foursquare:{id:'',name:'',location:'',categories:'',rating:''},
		description:'',
		begintime:'', 
		endtime:'', 
		trip_id:'',
		index:'',
		user_id:''
	};

	// var places = [
	// { name:'koh wat' },
	// { name:'koh tuan'}
	// ];

	// var places = [
	// {id:"4e4951d614959d51c187ac11",name:"วอมอัฟ คาเฟ่",location:"Thailand",categories:"ผับบาร์",rating:7.3}
	// ];
	

	var places = [
	{
		foursquare:{id:"4e4951d614959d51c187ac11",name:"วอร์มอัพ คาเฟ่",location:"Thailand",categories:"ผับบาร์",rating:7.3},
		description: "สะแด่วไปเลยครัฟพี่น้องงงง",
		begintime: 1396532315302, 
		endtime: 1396508400769, 
		trip_id:12345,
		index:1,
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

	function getPlaces(){
		return places;
	}

	function clearChosenPlace(){
		chosenplace = {
			foursquare:{id:'',name:'',location:'',categories:'',rating:''},
			description:'',
			begintime:'', 
			endtime:'', 
			trip_id:'',
			index:'',
			user_id:''
		};
	}

	function adjustPlaceObject(selectedplace){
		return {
			foursquare:{id:selectedplace.venue.id,name:selectedplace.venue.name,location:selectedplace.venue.location,categories:selectedplace.venue.categories[0].name,rating:selectedplace.venue.rating},
			description:'',
			begintime:'', 
			endtime:'', 
			trip_id:'',
			index:'',
			user_id:''
		};
	}

	function addPlacetoPlaces(obj){
		//places.push({name:'koh ped'});
		places.push(obj);
	}

	//=============================== Time Picker for each place ===============================
	var beginTime = new Date();

	var endTime = new Date();

	function getBeginTime(){
		return beginTime;
	}

	function setBeginTime(time){
		beginTime = time;
	}

	function getEndTime(){
		return endTime;
	}

	function setEndTime(time){
		endTime = time;
	}

	//=============================== Factory Return ===============================
	return{
		setChosenPlace: setChosenPlace,
		getChosenPlace: getChosenPlace,
		getPlaces: getPlaces,
		addPlacetoPlaces: addPlacetoPlaces,
		getBeginTime: getBeginTime,
		setBeginTime: setBeginTime,
		getEndTime: getEndTime,
		setEndTime: setEndTime,
		adjustPlaceObject: adjustPlaceObject,
		clearChosenPlace: clearChosenPlace
	}

});