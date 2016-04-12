'use strict';

function modelDAO(model){
    
    this.model = model;
    
    this.find = function(query, cb){
    this.model.find(query).exec(cb);
    };//fim do metodo findAll
    

    this.findFoto = function(query, cb){
    this.model.find(query).exec(cb);
    };//fim do metodo findFoto
      
        
    this.create = function(data, cb){
        var model = new this.model(data);
        model.save(function(err, result){
           cb(err, result); 
        });
    }//fim do método create    
      
}

module.exports = function(mongoose, obj){
    var Schema = mongoose.Schema;
    var objSchema = new Schema(obj);
    var Modelo = mongoose.model('Foto', objSchema);
    return new modelDAO(Modelo);
};