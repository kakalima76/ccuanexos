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
    
      
    this.getLast = function(req, res, next){
       this.model.findLastAsync()
       .then(function(data){
            res.json(data);
       })
       .catch(next);
    };//fim do getlast


    this.getAll = function(req, res, next){
        this.model.findAsync({})
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    };//fim do getAll
    
    this.getById = function(req, res, next){
        var _id = req.params._id;
        this.model.findOneAsync(_id)
        .then(handleFound)
        .then(function(data){
            res.json(data);
        });
    };//fim do getById
    
    this.create = function(req, res, next){
    
        var nome = req.body.nome;
        var matricula = req.body.matricula;
        var senha = req.body.senha;
        var ordem = req.body.ordem;
        var data = req.body.data;
        var chefe = req.body.chefe;
        
        var body = 
            {
                nome : nome,
                matricula: matricula,
                senha : senha,
                ordem : ordem,
                data: data,
                chefe: chefe               
            }
        
        this.model.createAsync(body)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
    
    this.update = function(req, res, next){
        var nome = req.params.nome;
        var ordem = req.params.ordem;
        var data = req.params.data;
        this.model.updateAsync(nome, {$set: {ordem: ordem, data: data}}, {multi: true})
        .then(function(err, data){
            res.json(data);
            console.log('teste');
        })
        .catch(next);
    };//fim do update
    
    this.remove = function(req, res, next){
        var _id = req.params._id;
        this.model.removeAsync(_id)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do remove
               
}


module.exports = function(usuarioModel){
    return new usuarioController(usuarioModel);
}


