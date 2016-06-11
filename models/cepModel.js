'use strict';

function modelDAO(model){
    
    this.model = model;
    
    this.find = function(query, cb){
        this.model.find(query).exec(cb);
    };//fim do metodo find

    this.findOne = function(bairro, cb){
        var query = {bairro: bairro}
        this.model.find(query).exec(cb);
    }
}

module.exports = function(mongoose, obj){
    var Schema = mongoose.Schema;
    var objSchema = new Schema(obj);
    var Cep = mongoose.model('Cep', objSchema);
    return new modelDAO(Cep);
};