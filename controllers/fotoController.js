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
    

    this.getAll = function(req, res, next){

        this.model.findAsync({})
        .then(function(data){
           var response = [];
           data.forEach(function(foto){
                response.push(
                   {
                    agente: foto.agente,
                    ordem: foto.ordem,
                    data: foto.data,
                    documento: foto.documento,
                    servico: foto.servico,
                    acao: foto.acao,
                    foto: foto.foto.toString()
                   } 

                )
           })

           res.json(response || '');

        })
        .catch(next);
    };//fim do getAll

    
    this.create = function(req, res, next){
        
        var foto = req.body;

        this.model.createAsync(foto)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
    
    
}


module.exports = function(usuarioModel){
    return new usuarioController(usuarioModel);
}