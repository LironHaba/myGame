var http = require('http');
var gamer =  require('./gamer_module');

var server = http.createServer(function(req,res){


	res.writeHead(200,{'content-Type' : 'text/plain'});
	res.end("Hello :)");

	});

	server.listen(8080);

// Play some games

gamer.win(100);
gamer.win(200);
gamer.win(300);
gamer.lose(700);