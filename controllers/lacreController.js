'use strict';
var debug = require('debug')('appAutos:controller')
var moment = require('moment');
var jwt = require('jwt-simple');
var Promisse = require('bluebird');
var handleFound = function(data){
    if(!data){
        var err = new Error('Not found');
        err.status = 404;
        throw err;
    }
    
    return data;
    
};

function usuarioController(usuarioModel){
    this.model = Promisse.promisifyAll(usuarioModel);
    
    //recupera todos os agentes em um determinado status
    
    this.getAll = function(req, res, next){
        this.model.findAsync({})
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    }//fim do  getLast

    this.getData = function(req, res, next){

        var data = req.params.data;

        this.model.findDataAsync(data)
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    }//fim do  getData
     this.getLacre = function(req, res, next){

        var numero = req.params.numero;

        this.model.findLacreAsync(numero)
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    }//fim do  getLacre




    
    this.create = function(req, res, next){

        var body = req.body;
            
        this.model.createAsync(body)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
          
}


module.exports = function(usuarioModel){
    return new usuarioController(usuarioModel);
}