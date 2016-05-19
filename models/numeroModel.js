'use strict';

function modelDAO(model){
    
    this.model = model;
    
    this.findOne = function(query, cb){
        this.model.find(query).sort({'_id' : -1}).limit(1).exec(cb);
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
    var Numero = mongoose.model('Numero', objSchema);
    return new modelDAO(Numero);
};

