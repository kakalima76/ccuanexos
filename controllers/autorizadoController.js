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

    this.countAll = function(req, res, next){
        this.model.countAsync({})
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    }//fim do método countAll

    this.getOne = function(req, res, next){
        this.model.findOneAsync({})
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    }//fim do  findOne

           
    this.getAll = function(req, res, next){
        this.model.findAsync({})
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    };//fim do getAll
    
  
    
    this.create = function(req, res, next){
    
        var vistoria = req.body;
        
        this.model.createAsync(vistoria)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
                  
}


module.exports = function(usuarioModel){
    return new usuarioController(usuarioModel);
}