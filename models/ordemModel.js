'use strict';

function modelDAO(model){
    
    this.model = model;
    
    this.find = function(query, cb){
    this.model.find(query).exec(cb);
    };//fim do metodo find
    
    this.findOne = function(query, cb){
        this.model.find(query).sort({'_id' : -1}).limit(1).exec(cb);
    }

        
    this.create = function(data, equipe, acao, chefe, viatura, agente, cb){
        var model = new this.model(data);
        equipe.forEach(function(value){
            model.equipe.push(value.trim());
        })

        acao.forEach(function(value){
            model.acao.push(value.trim());
        })

        chefe.forEach(function(value){
            model.chefe.push(value.trim());
        })

        viatura.forEach(function(value){
            model.viatura.push(value.trim());
        })

        agente.forEach(function(value){
            model.agentes.push(value.trim());
        })

        
        model.save(function(err, result){
           cb(err, result); 
        });
    }//fim do método create
    

     this.update = function(numero, data, options, cb){
        var query = {numero: numero};
        this.model.update(query, data, options).exec(function(err, result){
           cb(err, result); 
        });
    };//fim do metodo update
    
      
}


module.exports = function(mongoose, obj){
    var Schema = mongoose.Schema;
    var objSchema = new Schema(obj);
    var Modelo = mongoose.model('Orden', objSchema);
    return new modelDAO(Modelo);
};

