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
        var data = req.body.data;
        var equipe = req.body.equipe;
        var apresentacao = req.body.apresentacao;
        var termino = req.body.termino;
        var acao = req.body.acao;
        var chefe = req.body.chefe;
        var viatura = req.body.viatura;
        var agentes = req.body.agentes;
        var status = req.body.status;
        
        var body = 
            {
                status: status,
                numero: numero,
                data: data,
                apresentacao: apresentacao,
                termino: termino,
            }

        var arrayEquipe = equipe.split(',');
        var arrayAcao = acao.split(',');
        var arrayChefe = chefe.split(',');
        var arrayViatura = viatura.split(',');
        var arrayAgentes = agentes.split(',');

        this.model.createAsync(body, arrayEquipe, arrayAcao, arrayChefe, arrayViatura, arrayAgentes)
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


