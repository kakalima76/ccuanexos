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
    
    this.login = function(req, res, next){
            var nome = req.body.nome;
            var senha = req.body.senha;
        this.model.findUser(nome, function(err, data){
            if(data[0].validarSenha(senha)){
                var expires = moment().add(7, 'days').valueOf();
                var token = jwt.encode({user: data[0].nome, exp: expires}, 'segredo');
                res.json({token : token});
              
            }//fim do if
            
        })//fim do metodo findUser
        
        
    }//fim da função login
      
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
        var senha = this.model.gerarSenha(req.body.senha);
        var acesso = req.body.acesso;
        
        var body = 
            {
                nome : nome,
                senha : senha,
                acesso : acesso                
            }
        
        this.model.createAsync(body)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
    
    this.update = function(req, res, next){
        var _id = req.params._id;
        var body = req.body;
        this.model.updateAsync(_id, body)
        .then(function(err, data){
            res.json(data);
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


