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
        var numero = req.params.numero;
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

        var body = req.body;

        
        this.model.createAsync(body)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
    
    this.update = function(req, res, next){
        var numero = req.body.numero;
        
        var equipe = req.body.equipe,
            apresentacao = req.body.apresentacao,
            termino = req.body.termino,
            acao01 = req.body.acao01,
            acao02 = req.body.acao02,
            acao03 = req.body.acao03,
            acao04 = req.body.acao04,
            acao05 = req.body.acao05,
            acao06 = req.body.acao06,
            acao07 = req.body.acao07,
            chefe = req.body.chefe,
            viatura = req.body.viatura,
            agentes = req.body.agentes;

       
        this.model.updateAsync(numero, {$set: {equipe: equipe, apresentacao: apresentacao, termino: termino, acao01: acao01, acao02: acao02, acao03: acao03, acao04: acao04, acao05: acao05, acao06: acao06, acao07: acao07, viatura: viatura}}, {multi: true})
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do update


    this.atualChefe = function(req, res, next){
        var numero = req.body.numero;
        var chefe = req.body.chefe;
       
         this.model.updateAsync(numero, {$set: {chefe: chefe}}, {multi: true})
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do update

    this.atualAgente = function(req, res, next){
        var numero = req.body.numero;
        var agentes = req.body.agentes;
       
         this.model.updateAsync(numero, {$set: {agentes: agentes}}, {multi: true})
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do update
}


module.exports = function(usuarioModel){
    return new usuarioController(usuarioModel);
}


