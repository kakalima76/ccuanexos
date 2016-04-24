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
    
    this.getLast = function(req, res, next){
        this.model.findOneAsync({})
        .then(function(data){
            res.json(data);
            console.log(data);
        })
        .catch(next);
    }//fim do  getLast

    this.getOrdem = function(req, res, next){
        var numero = req.body.numero;
        var query = {numero: numero}

        this.model.findAsync(query)
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    };//fim do getOrdem

    this.getAll = function(req, res, next){
        this.model.findAsync({})
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    };//fim do getAll
    
    
    this.create = function(req, res, next){

    
        var numero = req.body.numero;
        var equipe = req.body.equipe;
        var apresentacao = req.body.apresentacao;
        var termino = req.body.termino;
        var acao = req.body.acao;
        var chefe = req.body.chefe;
        var viatura = req.body.viatura;
        
        var body = 
            {
                numero: numero,
                equipe: equipe,
                apresentacao: apresentacao,
                termino: termino,
                acao: acao,
                chefe: chefe,
                viatura: viatura
            }

        
        this.model.createAsync(body)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
    
    //define um ordem de serviço e um status para um agente por nome e data
    /*this.update = function(req, res, next){
       
        this.model.updateAsync(nome, data, {$set: {ordem: ordem, status: status}}, {multi: false})
        .then(function(err, data){
            res.json(req.body);
        })
        .catch(next);
    };//fim do update*/
 
               
}


module.exports = function(usuarioModel){
    return new usuarioController(usuarioModel);
}


