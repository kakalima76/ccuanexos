'use strict';

function modelDAO(model){
    
    this.model = model;
    

    this.findOne = function(cpf, cb){
        var query = {cpf: cpf}
        this.model.find(query).exec(cb);
    }
        
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
    var FotoInscrito = mongoose.model('FotoInscrito', objSchema);
    return new modelDAO(FotoInscrito);
};