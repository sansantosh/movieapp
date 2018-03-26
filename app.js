var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/UI/" + "index.html" );
})

app.get('/movieList/:id', function(req, res){
	
	var month = req.params.id; 
	console.log(req.params.id);
	fs.readFile( __dirname + "/" + "movies"+month+".json", 'utf8', function (err, data) {
		var obj = JSON.parse(data);
		console.log(obj);
  		res.send(obj);
	});
});
// app.use(express.static(__dirname + '/UI'));
app.use(express.static(path.join(__dirname, 'UI')));
app.listen(8081, function(){
 console.log('Example app listening on port 8081');
})
