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

    this.getOne = function(req, res, next){

        var cpf = req.params.cpf;

        this.model.findOneAsync(cpf)
        .then(function(data){
            var response = [];
                data.forEach(function(foto){
                    response.push(
                       {
                        foto: foto.foto.toString()
                       } 
                    )
                })



            res.json(response || '');
        })
        .catch(next);
    }//fim do  findOne

           
    
    this.create = function(req, res, next){
    
        var inscrito = req.body;
        
        this.model.createAsync(inscrito)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
                  
}


module.exports = function(usuarioModel){
    return new usuarioController(usuarioModel);
}