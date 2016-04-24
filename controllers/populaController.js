var datas = require('../lib/datas');
var http = require('http')
var readline = require('linebyline'),
rldatas = readline('./lib/arquivo2.csv');
rlagentes = readline('./lib/agentes.txt')
var obj = require('../config/usuario');
var mongoose = require('../db/mongoose');
var usuarioModel = require('../models/model')(mongoose, obj);
var usuarioController = require('../controllers/usuarioController')(usuarioModel);

var datas = [];
var agentes = []
var escala = [];
var escalado = {}

/*var usuario = 
    {
        nome : String,
        matricula: String,
        senha : String,
        ordem: String,
        data: String,
        chefe: Boolean
    }*/

function montaDatas(){  
	  	return new Promise(function (fulfill, reject){
	  	rldatas.on('line', function(line, lineCount, byteCount){
		datas.push(line);
		}).on('error', function(e){
		reject(Error(e));
		}).on('end', function(){
		fulfill(datas)
		})
	}).then(function(dts){
		/*console.log(dts);*/
	})
}

function montaAgentes(v){

	return new Promise(function(fulfill, reject){
		rlagentes.on('line', function(line, lineCount, byteCount){
		agentes.push(line);
		}).on('error', function(e){
		reject(Error(e));
		}).on('end', function(){
		fulfill(agentes)
		})
	}).then(function(value){
		value.forEach(function(val){
			v.forEach(function(val2){
				escala.push(val + ', ' + val2);
			})
		})
	})
}

montaAgentes(datas);
montaDatas();

setTimeout(function(){
	escala.forEach(function(value){
		var aux = value.split(',');
		escalado.nome = aux[0].trim();
		escalado.matricula = aux[1].trim();
		escalado.contato = aux[2].trim();
		escalado.senha = aux[3].trim().substring(0,4);
		escalado.ordem = aux[4].trim();
		if(aux[5].trim() === 'true'){
			escalado.chefe = true
		}else{
			escalado.chefe = false
		}
		escalado.status = aux[6].trim();
		escalado.data = aux[7].trim();
		usuarioModel.create(escalado, function(err, data){
			if(err){
				console.log(err);
			}
		})
	})


}, 2000);