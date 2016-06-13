'use strict';

function modelDAO(model){
    
    this.model = model;
    
    this.find = function(query, cb){
        this.model.find(query).exec(cb);
    }

    this.findData = function(data, cb){
    	var query = {data: data}
        this.model.find(query).exec(cb);
    }

    this.findLacre = function(numero, cb){
    	var query = {numero: numero}
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
    var Lacre = mongoose.model('Lacre', objSchema);
    return new modelDAO(Lacre);
};