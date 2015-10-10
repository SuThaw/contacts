var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app
	.use(express.static('./public'))
	.get('*',function(req,res){
		res.sendFile(__dirname + '/public/main.html');
	});

app.listen(port,function(){
	console.log('Server start at ' + port);
});