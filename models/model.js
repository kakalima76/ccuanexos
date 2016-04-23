'use strict';

function modelDAO(model){
    
    this.model = model;
    
    this.find = function(query, cb){
    this.model.find(query).exec(cb);
    };//fim do metodo find
      
    this.findAgentes = function(status, data, cb){
        var query = {status: status, data: data}
        this.model.find(query).exec(cb);
    };
    
        
    this.create = function(data, cb){
        var model = new this.model(data);
        model.save(function(err, result){
           cb(err, result); 
        });
    }//fim do método create
    
    this.update = function(nome, date, data, options, cb){
        var query = {nome : nome, data: date};
        this.model.update(query, data, options).exec(function(err, result){
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

