var servidor = require('http');

function arrancaservidor(requiere, respueta){
	respueta.writeHead(200, {"Content-type":"text/html"});
	respueta.write("<h1>Que bien<h1>");
	respueta.end();
}

servidor.createServer(arrancaservidor).listen(8888);