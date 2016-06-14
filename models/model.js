'use strict';

function modelDAO(model){
    
    this.model = model;
    
    this.find = function(query, cb){
    this.model.find(query).exec(cb);
    };//fim do metodo find

    this.findOne = function(matricula, cb){
    var query = {matricula: matricula}
    this.model.findOne(query).exec(cb);
    };//fim do metodo find
        
    this.create = function(data, cb){
        var model = new this.model(data);
        model.save(function(err, result){
           cb(err, result); 
        });
    }//fim do método create
    
    this.update = function(nome, dados, options, cb){
        var query = {nome : nome};
        this.model.update(query, dados, options).exec(function(err, result){
           cb(err, result); 
        });
    };//fim do metodo update
    
      
}


module.exports = function(mongoose, obj){
    var Schema = mongoose.Schema;
    var objSchema = new Schema(obj);
    var Modelo = mongoose.model('Modelo', objSchema);
    return new modelDAO(Modelo);
};

