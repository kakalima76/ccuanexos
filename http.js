var http = require('http');
var https = require('https');
var obj = require('./config/autorizado');
var mongoose = require('./db/mongoose');
var autorizadoModel = require('./models/modelAutorizado')(mongoose, obj);
var autorizadoController = require('./controllers/autorizadoController')(autorizadoModel);
/*
var num = 14;

function testaNum(value){
	if(num < value){
		num += 1;
		console.log(num);

	http.get('http://ccuanexos.herokuapp.com/autorizado', (res) => {
  
  	res.on('data', (d) => {
    console.log(d)
  	});

	}).on('error', (e) => {
  	console.error(e);
	})
	}
}


setInterval(function(){
	
	http.get('http://ccuanexos.herokuapp.com/autorizado/totais', (res) => {
  
  	res.on('data', (d) => {
    testaNum(parseInt(d));
  	});

	}).on('error', (e) => {
  	console.error(e);
	})

}, 2000);*/

autorizadoController.getOne();