'use strict';
var bcrypt = require('bcrypt');

function modelDAO(model){
    
    this.model = model;
    
    this.find = function(query, cb){
    this.model.find(query).exec(cb);
    };//fim do metodo find
    
    this.findOne = function(_id, cb){
    var query = {_id : _id};
    this.model.findOne(query).exec(cb);
    };//fim do metodo findOne
    
    this.findUser = function(nome, cb){
    var query = {nome : nome};
    this.model.find(query).exec(cb);
    };//fim do metodo findUser

    this.findLast = function(cb){
    this.model.find({}, cb)
    .sort({'$natural' : -1})
    .limit(1);
    };//fim do metodo findLast
    
        
    this.create = function(data, cb){
        var model = new this.model(data);
        model.save(function(err, result){
           cb(err, result); 
        });
    }//fim do método create
    
    this.update = function(_id, data, cb){
        var query = {_id : _id};
        this.model.update(query, data).exec(function(err, result){
           cb(err, result); 
        });
    };//fim do metodo update
    
    this.remove = function(_id, cb){
        var query = {_id : _id};
        this.model.remove(query).exec(function(err, result){
            cb(err, result);      
        });
    };//fim do metodo remove
    
    //login's adicionals functions
    
    this.gerarSenha = function(senha){
    return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));
}

    this.validarSenha = function(senha){
        return bcrypt.compareSync(senha, this.senha);
    }

  
}

//var mongoose = require('../db/mongoose');
//var obj = require('../config/usuario');
//var Modelo = mongoose.model('Modelo', obj);
//var teste = new modelDAO(Modelo);
//teste.findUser('zildo', function(err, data){
//    console.log(data.senha);
//})


module.exports = function(mongoose, obj){
    var Schema = mongoose.Schema;
    var objSchema = new Schema(obj);
    objSchema.methods.validarSenha = function(senha){
            return bcrypt.compareSync(senha, this.senha);
        };
    var Modelo = mongoose.model('Modelo', objSchema);
    return new modelDAO(Modelo);
};

