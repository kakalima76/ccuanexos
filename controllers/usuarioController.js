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
    this.getAgentes = function(req, res, next){
        var data = req.body.data;
        var status = req.body.status;
        this.model.findAgentesAsync(status, data)
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    };//fim do getAgentes

    this.getAll = function(req, res, next){
        this.model.findAsync({})
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    };//fim do getAll
    
    
    this.create = function(req, res, next){
    
        var nome = req.body.nome;
        var matricula = req.body.matricula;
        var senha = req.body.senha;
        var ordem = req.body.ordem;
        var data = req.body.data;
        var chefe = req.body.chefe;
        var status = req.body.status
        
        var body = 
            {
                nome : nome,
                matricula: matricula,
                senha : senha,
                ordem : ordem,
                data: data,
                chefe: chefe,
                status: status              
            }
        
        this.model.createAsync(body)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
    
    //define um ordem de serviço e um status para um agente por nome e data
    this.update = function(req, res, next){
        var nome = req.body.nome;
        var ordem = req.body.ordem;
        var data = req.body.data;
        var status = req.body.status;
        this.model.updateAsync(nome, data, {$set: {ordem: ordem, status: status}}, {multi: false})
        .then(function(err, data){
            res.json(req.body);
        })
        .catch(next);
    };//fim do update
 
               
}


module.exports = function(usuarioModel){
    return new usuarioController(usuarioModel);
}


