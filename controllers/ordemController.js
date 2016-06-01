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

        var status = req.body.status;
        var numero = req.body.numero;
        var data = req.body.data;
        var equipe = req.body.equipe;
        var apresentacao = req.body.apresentacao;
        var termino = req.body.termino;
        var acao01 = req.body.acao01;
        var acao02 = req.body.acao02;
        var acao03 = req.body.acao03;
        var chefe = req.body.chefe;
        var viatura = req.body.viatura;
        var agentes = req.body.agentes;
        
        
        var body = 
            {
                status: status,
                numero: numero,
                data: data,
                equipe: equipe,
                apresentacao: apresentacao,
                termino: termino,
                acao01: acao01,
                acao02: acao02,
                acao03: acao03,
                chefe: chefe,
                viatura: viatura,
                agentes: agentes
            }

        
        this.model.createAsync(body)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
    
    this.update = function(req, res, next){
        var numero = req.body.numero;
        var status = req.body.status;
       
        this.model.updateAsync(numero, {$set: {status: status, chefe: [''], agentes: ['']}}, {multi: true})
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do update

    this.atualChefe = function(req, res, next){
        var numero = req.body.numero;
        var chefe = req.body.chefe;
        var arrayChefe = chefe.split(',');
       
         this.model.updateAsync(numero, {$set: {chefe: arrayChefe}}, {multi: true})
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do update

    this.atualAgente = function(req, res, next){
        var numero = req.body.numero;
        var agentes = req.body.agentes;
        var arrayAgentes = agentes.split(',');
       
         this.model.updateAsync(numero, {$set: {agentes: arrayAgentes}}, {multi: true})
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do update
 
               
}


module.exports = function(usuarioModel){
    return new usuarioController(usuarioModel);
}


