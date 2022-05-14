/* const math = require('./math.js');
const colors =  require('colors');

const http = require('http');

const handleserver = function (request, respuesta) {
    respuesta.writeHead(200, {'Content-type': 'text/html'});
    respuesta.write('<h1>hola mundo</h1>');
    respuesta.end();
}


const server = http.createServer(handleserver);

server.listen(3000, function () {
    console.log('server on port 3000'.yellow);
});



/* console.log(math); */
/* console.log(math.sumar(4,2));
console.log(math.restar(10,5));
console.log(math.multiplicar(6,8))
console.log(math.dividir(10,2)); */

/* console.log(colors.rainbow('hola mundo')); */
const colors =  require('colors');

const express = require('express');

const server = express();

server.get('/', function(req, res){
    res.send('<h1>Express con Nodejs</h1>');
    res.end();
});


server.listen(3000, function (){
    console.log('Server on port 3000'.red);
});