console.log("hey!!!!");

var express = require('express');

var bodyParser = require('body-parser');

var request = require('request');

var app = express();

var nasa2 = `https://api.nasa.gov/neo/rest/v1/feed?api_key=jkFSPoYMf5xZc4YSiG24QzOEJBLThffnE7R43vbd`


app.use(bodyParser.urlencoded({

	extended: true
}));

app.use(bodyParser.json());

app.use(express.static('./public'));

// this will never run becuase the static middleware above will take care of thi

app.get('/', function(req, res){
	response.sendFile('./public/index.html');
});

app.get('/asteroids', function(req, res){
	var querystr = nasa2 + '&start_date=' + req.query.start_date + '&end_date=' + req.query.end_date
	request(querystr, function(error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body); // Print the HTML for the Google homepage.
  	  res.send(body);

});
});

app.get('/about', function(req, res){
	res.send("This is about me -- Steve!!!!!");
});

// this post route handles our form submission
// <form method="POST" action="/form-submit">
app.post('/form-submit', function(req, res){
	console.log('received a post req');
	// i'd usually rather redirect after a post req
	// res.send('Received the post request');

	// res.redirect forces the browser to send
	res.redirect('/about');
})


app.use(function(req, res){
	res.send('404');
})

app.listen(8080, function(){
	console.log('The app is running on post 8080.');
});