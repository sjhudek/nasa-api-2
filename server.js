console.log("hey!!!!");

var express = require('express');

var bodyParser = require('body-parser');

var request = require('request');

var app = express();

app.use(bodyParser.urlencoded({

	extended: true
}));

app.use(bodyParser.json());

app.use(express.static('./public'));

// this will never run becuase the static middleware above will take care of this
app.get('/', function(request, response){
	response.sendFile('./public/index.html');
});

app.get('/about', function(request, response){
	response.send("This is about me -- Steve!!!!!");
});

// this post route handles our form submission
// <form method="POST" action="/form-submit"
app.post('/form-submit', function(request, response){
	console.log('received a post request');
	// i'd usually rather redirect after a post request
	// response.send('Received the post request');

	// response.redirect forces the browser to send
	response.redirect('/about');
})


app.use(function(request, response){
	response.send('404');
})

app.listen(8080, function(){
	console.log('The app is running on post 8080.');
});