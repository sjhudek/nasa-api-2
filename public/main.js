$(document).ready(function () {
    var nasa = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-10-17&end_date=2017-10-24&api_key=jkFSPoYMf5xZc4YSiG24QzOEJBLThffnE7R43vbd'

 

    $('#searchNasa').on('submit', function(event){
        event.preventDefault()
        
        var nasa2 = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${$('#startDate').val()}&end_date=${$('#endDate').val()}&api_key=jkFSPoYMf5xZc4YSiG24QzOEJBLThffnE7R43vbd`

        $('#startDate').val();

        $.get(nasa2, function (data) {
	        console.log(data);
	        console.log(data.near_earth_objects);
	        for (var day in data.near_earth_objects) {
		      for(var i = 0; i < data.near_earth_objects[day].length; i++) {
		        if(data.near_earth_objects[day][i].is_potentially_hazardous_asteroid) {
		         $('.theScreen').append('<br><p>Asteroid Name: ' + data.near_earth_objects[day][i].name + '</p>');
		        	$('.theScreen').append('<p>Close approach date: ' + data.near_earth_objects[day][i].close_approach_data[0].close_approach_date + '</p>');
		        	$('.theScreen').append('<p>Velocity MPH: ' + data.near_earth_objects[day][i].close_approach_data[0].relative_velocity.miles_per_hour + '</p>');
		        	$('.theScreen').append('<p>Distance from the Earth: ' + data.near_earth_objects[day][i].close_approach_data[0].miss_distance.miles + '</p>');
 			};
 		};
 	};
 });


        $('#endDate').val();
        // $().serialize() will grab all the named inputs in the form, and put their values into a url-encoded string
        console.log($('#searchNasa').serialize());

    });
});