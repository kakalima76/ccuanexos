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
    
    //recupera todos os agentes em um determinado status

    this.getAll = function(req, res, next){
        this.model.findAsync({})
        .then(function(data){
            res.json(data);
        })
        .catch(next);
    };//fim do getAll
    
    
    this.create = function(req, res, next){
    
        var nome = req.body.nome;
        var matricula = req.body.matricula;
        var contato = req.body.contato;
        var senha = matricula.substring(0,5);
        var chefe = req.body.chefe;
        
        var body = 
            {
                nome : nome,
                matricula: matricula,
                contato: contato,
                senha : senha,
                chefe: chefe             
            }
        
        this.model.createAsync(body)
        .then(function(err, data){
            res.json(data);
        })
        .catch(next);
    };//fim do create
    
    //define um ordem de serviço e um status para um agente por nome e data
    this.update = function(req, res, next){
        var nome = req.body.nome;
        var ordem = req.body.ordem;
        var status = req.body.status;
        var data = req.body.data;
        var update = null;

            if(data === '07062016'){update = {'07062016': {ordem: ordem, status: status}}}
            if(data === '08062016'){update = {'08062016': {ordem: ordem, status: status}}}
            if(data === '09062016'){update = {'09062016': {ordem: ordem, status: status}}}
            if(data === '10062016'){update = {'10062016': {ordem: ordem, status: status}}}
            if(data === '11062016'){update = {'11062016': {ordem: ordem, status: status}}}
            if(data === '12062016'){update = {'12062016': {ordem: ordem, status: status}}}
            if(data === '13062016'){update = {'13062016': {ordem: ordem, status: status}}}
            if(data === '14062016'){update = {'14062016': {ordem: ordem, status: status}}}
            if(data === '15062016'){update = {'15062016': {ordem: ordem, status: status}}}
            if(data === '16062016'){update = {'16062016': {ordem: ordem, status: status}}}
            if(data === '17062016'){update = {'17062016': {ordem: ordem, status: status}}}
            if(data === '18062016'){update = {'18062016': {ordem: ordem, status: status}}}
            if(data === '19062016'){update = {'19062016': {ordem: ordem, status: status}}}
            if(data === '20062016'){update = {'20062016': {ordem: ordem, status: status}}}
            if(data === '21062016'){update = {'21062016': {ordem: ordem, status: status}}}
            if(data === '22062016'){update = {'22062016': {ordem: ordem, status: status}}}
            if(data === '23062016'){update = {'23062016': {ordem: ordem, status: status}}}
            if(data === '24062016'){update = {'24062016': {ordem: ordem, status: status}}}
            if(data === '25062016'){update = {'25062016': {ordem: ordem, status: status}}}
            if(data === '26062016'){update = {'26062016': {ordem: ordem, status: status}}}
            if(data === '27062016'){update = {'27062016': {ordem: ordem, status: status}}}
            if(data === '28062016'){update = {'28062016': {ordem: ordem, status: status}}}
            if(data === '29062016'){update = {'29062016': {ordem: ordem, status: status}}}
            if(data === '30062016'){update = {'30062016': {ordem: ordem, status: status}}}
            if(data === '01072016'){update = {'01072016': {ordem: ordem, status: status}}}
            if(data === '02072016'){update = {'02072016': {ordem: ordem, status: status}}}
            if(data === '03072016'){update = {'03072016': {ordem: ordem, status: status}}}
            if(data === '04072016'){update = {'04072016': {ordem: ordem, status: status}}}
            if(data === '05072016'){update = {'05072016': {ordem: ordem, status: status}}}
            if(data === '06072016'){update = {'06072016': {ordem: ordem, status: status}}}
            if(data === '07072016'){update = {'07072016': {ordem: ordem, status: status}}}
            if(data === '08072016'){update = {'08072016': {ordem: ordem, status: status}}}
            if(data === '09072016'){update = {'09072016': {ordem: ordem, status: status}}}
            if(data === '10072016'){update = {'10072016': {ordem: ordem, status: status}}}
            if(data === '11072016'){update = {'11072016': {ordem: ordem, status: status}}}
            if(data === '12072016'){update = {'12072016': {ordem: ordem, status: status}}}
            if(data === '13072016'){update = {'13072016': {ordem: ordem, status: status}}}
            if(data === '14072016'){update = {'14072016': {ordem: ordem, status: status}}}
            if(data === '15072016'){update = {'15072016': {ordem: ordem, status: status}}}
            if(data === '16072016'){update = {'16072016': {ordem: ordem, status: status}}}
            if(data === '17072016'){update = {'17072016': {ordem: ordem, status: status}}}
            if(data === '18072016'){update = {'18072016': {ordem: ordem, status: status}}}
            if(data === '19072016'){update = {'19072016': {ordem: ordem, status: status}}}
            if(data === '20072016'){update = {'20072016': {ordem: ordem, status: status}}}
            if(data === '21072016'){update = {'21072016': {ordem: ordem, status: status}}}
            if(data === '22072016'){update = {'22072016': {ordem: ordem, status: status}}}
            if(data === '23072016'){update = {'23072016': {ordem: ordem, status: status}}}
            if(data === '24072016'){update = {'24072016': {ordem: ordem, status: status}}}
            if(data === '25072016'){update = {'25072016': {ordem: ordem, status: status}}}
            if(data === '26072016'){update = {'26072016': {ordem: ordem, status: status}}}
            if(data === '27072016'){update = {'27072016': {ordem: ordem, status: status}}}
            if(data === '28072016'){update = {'28072016': {ordem: ordem, status: status}}}
            if(data === '29072016'){update = {'29072016': {ordem: ordem, status: status}}}
            if(data === '30072016'){update = {'30072016': {ordem: ordem, status: status}}}
            if(data === '31072016'){update = {'31072016': {ordem: ordem, status: status}}}
            if(data === '01082016'){update = {'01082016': {ordem: ordem, status: status}}}
            if(data === '02082016'){update = {'02082016': {ordem: ordem, status: status}}}
            if(data === '03082016'){update = {'03082016': {ordem: ordem, status: status}}}
            if(data === '04082016'){update = {'04082016': {ordem: ordem, status: status}}}
            if(data === '05082016'){update = {'05082016': {ordem: ordem, status: status}}}
            if(data === '06082016'){update = {'06082016': {ordem: ordem, status: status}}}
            if(data === '07082016'){update = {'07082016': {ordem: ordem, status: status}}}
            if(data === '08082016'){update = {'08082016': {ordem: ordem, status: status}}}
            if(data === '09082016'){update = {'09082016': {ordem: ordem, status: status}}}
            if(data === '10082016'){update = {'10082016': {ordem: ordem, status: status}}}
            if(data === '11082016'){update = {'11082016': {ordem: ordem, status: status}}}
            if(data === '12082016'){update = {'12082016': {ordem: ordem, status: status}}}
            if(data === '13082016'){update = {'13082016': {ordem: ordem, status: status}}}
            if(data === '14082016'){update = {'14082016': {ordem: ordem, status: status}}}
            if(data === '15082016'){update = {'15082016': {ordem: ordem, status: status}}}
            if(data === '16082016'){update = {'16082016': {ordem: ordem, status: status}}}
            if(data === '17082016'){update = {'17082016': {ordem: ordem, status: status}}}
            if(data === '18082016'){update = {'18082016': {ordem: ordem, status: status}}}
            if(data === '19082016'){update = {'19082016': {ordem: ordem, status: status}}}
            if(data === '20082016'){update = {'20082016': {ordem: ordem, status: status}}}
            if(data === '21082016'){update = {'21082016': {ordem: ordem, status: status}}}
            if(data === '22082016'){update = {'22082016': {ordem: ordem, status: status}}}
            if(data === '23082016'){update = {'23082016': {ordem: ordem, status: status}}}
            if(data === '24082016'){update = {'24082016': {ordem: ordem, status: status}}}
            if(data === '25082016'){update = {'25082016': {ordem: ordem, status: status}}}
            if(data === '26082016'){update = {'26082016': {ordem: ordem, status: status}}}
            if(data === '27082016'){update = {'27082016': {ordem: ordem, status: status}}}
            if(data === '28082016'){update = {'28082016': {ordem: ordem, status: status}}}
            if(data === '29082016'){update = {'29082016': {ordem: ordem, status: status}}}
            if(data === '30082016'){update = {'30082016': {ordem: ordem, status: status}}}
            if(data === '31082016'){update = {'31082016': {ordem: ordem, status: status}}}
            if(data === '01092016'){update = {'01092016': {ordem: ordem, status: status}}}
            if(data === '02092016'){update = {'02092016': {ordem: ordem, status: status}}}
            if(data === '03092016'){update = {'03092016': {ordem: ordem, status: status}}}
            if(data === '04092016'){update = {'04092016': {ordem: ordem, status: status}}}
            if(data === '05092016'){update = {'05092016': {ordem: ordem, status: status}}}
            if(data === '06092016'){update = {'06092016': {ordem: ordem, status: status}}}
            if(data === '07092016'){update = {'07092016': {ordem: ordem, status: status}}}
            if(data === '08092016'){update = {'08092016': {ordem: ordem, status: status}}}
            if(data === '09092016'){update = {'09092016': {ordem: ordem, status: status}}}
            if(data === '10092016'){update = {'10092016': {ordem: ordem, status: status}}}
            if(data === '11092016'){update = {'11092016': {ordem: ordem, status: status}}}
            if(data === '12092016'){update = {'12092016': {ordem: ordem, status: status}}}
            if(data === '13092016'){update = {'13092016': {ordem: ordem, status: status}}}
            if(data === '14092016'){update = {'14092016': {ordem: ordem, status: status}}}
            if(data === '15092016'){update = {'15092016': {ordem: ordem, status: status}}}
            if(data === '16092016'){update = {'16092016': {ordem: ordem, status: status}}}
            if(data === '17092016'){update = {'17092016': {ordem: ordem, status: status}}}
            if(data === '18092016'){update = {'18092016': {ordem: ordem, status: status}}}
            if(data === '19092016'){update = {'19092016': {ordem: ordem, status: status}}}
            if(data === '20092016'){update = {'20092016': {ordem: ordem, status: status}}}
            if(data === '21092016'){update = {'21092016': {ordem: ordem, status: status}}}
            if(data === '22092016'){update = {'22092016': {ordem: ordem, status: status}}}
            if(data === '23092016'){update = {'23092016': {ordem: ordem, status: status}}}
            if(data === '24092016'){update = {'24092016': {ordem: ordem, status: status}}}
            if(data === '25092016'){update = {'25092016': {ordem: ordem, status: status}}}
            if(data === '26092016'){update = {'26092016': {ordem: ordem, status: status}}}
            if(data === '27092016'){update = {'27092016': {ordem: ordem, status: status}}}
            if(data === '28092016'){update = {'28092016': {ordem: ordem, status: status}}}
            if(data === '29092016'){update = {'29092016': {ordem: ordem, status: status}}}
            if(data === '30092016'){update = {'30092016': {ordem: ordem, status: status}}}
            if(data === '01102016'){update = {'01102016': {ordem: ordem, status: status}}}
            if(data === '02102016'){update = {'02102016': {ordem: ordem, status: status}}}
            if(data === '03102016'){update = {'03102016': {ordem: ordem, status: status}}}
            if(data === '04102016'){update = {'04102016': {ordem: ordem, status: status}}}
            if(data === '05102016'){update = {'05102016': {ordem: ordem, status: status}}}
            if(data === '06102016'){update = {'06102016': {ordem: ordem, status: status}}}
            if(data === '07102016'){update = {'07102016': {ordem: ordem, status: status}}}
            if(data === '08102016'){update = {'08102016': {ordem: ordem, status: status}}}
            if(data === '09102016'){update = {'09102016': {ordem: ordem, status: status}}}
            if(data === '10102016'){update = {'10102016': {ordem: ordem, status: status}}}
            if(data === '11102016'){update = {'11102016': {ordem: ordem, status: status}}}
            if(data === '12102016'){update = {'12102016': {ordem: ordem, status: status}}}
            if(data === '13102016'){update = {'13102016': {ordem: ordem, status: status}}}
            if(data === '14102016'){update = {'14102016': {ordem: ordem, status: status}}}
            if(data === '15102016'){update = {'15102016': {ordem: ordem, status: status}}}
            if(data === '16102016'){update = {'16102016': {ordem: ordem, status: status}}}
            if(data === '17102016'){update = {'17102016': {ordem: ordem, status: status}}}
            if(data === '18102016'){update = {'18102016': {ordem: ordem, status: status}}}
            if(data === '19102016'){update = {'19102016': {ordem: ordem, status: status}}}
            if(data === '20102016'){update = {'20102016': {ordem: ordem, status: status}}}
            if(data === '21102016'){update = {'21102016': {ordem: ordem, status: status}}}
            if(data === '22102016'){update = {'22102016': {ordem: ordem, status: status}}}
            if(data === '23102016'){update = {'23102016': {ordem: ordem, status: status}}}
            if(data === '24102016'){update = {'24102016': {ordem: ordem, status: status}}}
            if(data === '25102016'){update = {'25102016': {ordem: ordem, status: status}}}
            if(data === '26102016'){update = {'26102016': {ordem: ordem, status: status}}}
            if(data === '27102016'){update = {'27102016': {ordem: ordem, status: status}}}
            if(data === '28102016'){update = {'28102016': {ordem: ordem, status: status}}}
            if(data === '29102016'){update = {'29102016': {ordem: ordem, status: status}}}
            if(data === '30102016'){update = {'30102016': {ordem: ordem, status: status}}}
            if(data === '31102016'){update = {'31102016': {ordem: ordem, status: status}}}
            if(data === '01112016'){update = {'01112016': {ordem: ordem, status: status}}}
            if(data === '02112016'){update = {'02112016': {ordem: ordem, status: status}}}
            if(data === '03112016'){update = {'03112016': {ordem: ordem, status: status}}}
            if(data === '04112016'){update = {'04112016': {ordem: ordem, status: status}}}
            if(data === '05112016'){update = {'05112016': {ordem: ordem, status: status}}}
            if(data === '06112016'){update = {'06112016': {ordem: ordem, status: status}}}
            if(data === '07112016'){update = {'07112016': {ordem: ordem, status: status}}}
            if(data === '08112016'){update = {'08112016': {ordem: ordem, status: status}}}
            if(data === '09112016'){update = {'09112016': {ordem: ordem, status: status}}}
            if(data === '10112016'){update = {'10112016': {ordem: ordem, status: status}}}
            if(data === '11112016'){update = {'11112016': {ordem: ordem, status: status}}}
            if(data === '12112016'){update = {'12112016': {ordem: ordem, status: status}}}
            if(data === '13112016'){update = {'13112016': {ordem: ordem, status: status}}}
            if(data === '14112016'){update = {'14112016': {ordem: ordem, status: status}}}
            if(data === '15112016'){update = {'15112016': {ordem: ordem, status: status}}}
            if(data === '16112016'){update = {'16112016': {ordem: ordem, status: status}}}
            if(data === '17112016'){update = {'17112016': {ordem: ordem, status: status}}}
            if(data === '18112016'){update = {'18112016': {ordem: ordem, status: status}}}
            if(data === '19112016'){update = {'19112016': {ordem: ordem, status: status}}}
            if(data === '20112016'){update = {'20112016': {ordem: ordem, status: status}}}
            if(data === '21112016'){update = {'21112016': {ordem: ordem, status: status}}}
            if(data === '22112016'){update = {'22112016': {ordem: ordem, status: status}}}
            if(data === '23112016'){update = {'23112016': {ordem: ordem, status: status}}}
            if(data === '24112016'){update = {'24112016': {ordem: ordem, status: status}}}
            if(data === '25112016'){update = {'25112016': {ordem: ordem, status: status}}}
            if(data === '26112016'){update = {'26112016': {ordem: ordem, status: status}}}
            if(data === '27112016'){update = {'27112016': {ordem: ordem, status: status}}}
            if(data === '28112016'){update = {'28112016': {ordem: ordem, status: status}}}
            if(data === '29112016'){update = {'29112016': {ordem: ordem, status: status}}}
            if(data === '30112016'){update = {'30112016': {ordem: ordem, status: status}}}
            if(data === '01122016'){update = {'01122016': {ordem: ordem, status: status}}}
            if(data === '02122016'){update = {'02122016': {ordem: ordem, status: status}}}
            if(data === '03122016'){update = {'03122016': {ordem: ordem, status: status}}}
            if(data === '04122016'){update = {'04122016': {ordem: ordem, status: status}}}
            if(data === '05122016'){update = {'05122016': {ordem: ordem, status: status}}}
            if(data === '06122016'){update = {'06122016': {ordem: ordem, status: status}}}
            if(data === '07122016'){update = {'07122016': {ordem: ordem, status: status}}}
            if(data === '08122016'){update = {'08122016': {ordem: ordem, status: status}}}
            if(data === '09122016'){update = {'09122016': {ordem: ordem, status: status}}}
            if(data === '10122016'){update = {'10122016': {ordem: ordem, status: status}}}
            if(data === '11122016'){update = {'11122016': {ordem: ordem, status: status}}}
            if(data === '12122016'){update = {'12122016': {ordem: ordem, status: status}}}
            if(data === '13122016'){update = {'13122016': {ordem: ordem, status: status}}}
            if(data === '14122016'){update = {'14122016': {ordem: ordem, status: status}}}
            if(data === '15122016'){update = {'15122016': {ordem: ordem, status: status}}}
            if(data === '16122016'){update = {'16122016': {ordem: ordem, status: status}}}
            if(data === '17122016'){update = {'17122016': {ordem: ordem, status: status}}}
            if(data === '18122016'){update = {'18122016': {ordem: ordem, status: status}}}
            if(data === '19122016'){update = {'19122016': {ordem: ordem, status: status}}}
            if(data === '20122016'){update = {'20122016': {ordem: ordem, status: status}}}
            if(data === '21122016'){update = {'21122016': {ordem: ordem, status: status}}}
            if(data === '22122016'){update = {'22122016': {ordem: ordem, status: status}}}
            if(data === '23122016'){update = {'23122016': {ordem: ordem, status: status}}}
            if(data === '24122016'){update = {'24122016': {ordem: ordem, status: status}}}
            if(data === '25122016'){update = {'25122016': {ordem: ordem, status: status}}}
            if(data === '26122016'){update = {'26122016': {ordem: ordem, status: status}}}
            if(data === '27122016'){update = {'27122016': {ordem: ordem, status: status}}}
            if(data === '28122016'){update = {'28122016': {ordem: ordem, status: status}}}
            if(data === '29122016'){update = {'29122016': {ordem: ordem, status: status}}}
            if(data === '30122016'){update = {'30122016': {ordem: ordem, status: status}}}
            if(data === '31122016'){update = {'31122016': {ordem: ordem, status: status}}}
            if(data === '01012017'){update = {'01012017': {ordem: ordem, status: status}}}
            if(data === '02012017'){update = {'02012017': {ordem: ordem, status: status}}}
            if(data === '03012017'){update = {'03012017': {ordem: ordem, status: status}}}
            if(data === '04012017'){update = {'04012017': {ordem: ordem, status: status}}}
            if(data === '05012017'){update = {'05012017': {ordem: ordem, status: status}}}
            if(data === '06012017'){update = {'06012017': {ordem: ordem, status: status}}}
            if(data === '07012017'){update = {'07012017': {ordem: ordem, status: status}}}
            if(data === '08012017'){update = {'08012017': {ordem: ordem, status: status}}}
            if(data === '09012017'){update = {'09012017': {ordem: ordem, status: status}}}
            if(data === '10012017'){update = {'10012017': {ordem: ordem, status: status}}}
            if(data === '11012017'){update = {'11012017': {ordem: ordem, status: status}}}
            if(data === '12012017'){update = {'12012017': {ordem: ordem, status: status}}}
            if(data === '13012017'){update = {'13012017': {ordem: ordem, status: status}}}
            if(data === '14012017'){update = {'14012017': {ordem: ordem, status: status}}}
            if(data === '15012017'){update = {'15012017': {ordem: ordem, status: status}}}
            if(data === '16012017'){update = {'16012017': {ordem: ordem, status: status}}}
            if(data === '17012017'){update = {'17012017': {ordem: ordem, status: status}}}
            if(data === '18012017'){update = {'18012017': {ordem: ordem, status: status}}}
            if(data === '19012017'){update = {'19012017': {ordem: ordem, status: status}}}
            if(data === '20012017'){update = {'20012017': {ordem: ordem, status: status}}}
            if(data === '21012017'){update = {'21012017': {ordem: ordem, status: status}}}
            if(data === '22012017'){update = {'22012017': {ordem: ordem, status: status}}}
            if(data === '23012017'){update = {'23012017': {ordem: ordem, status: status}}}
            if(data === '24012017'){update = {'24012017': {ordem: ordem, status: status}}}
            if(data === '25012017'){update = {'25012017': {ordem: ordem, status: status}}}
            if(data === '26012017'){update = {'26012017': {ordem: ordem, status: status}}}
            if(data === '27012017'){update = {'27012017': {ordem: ordem, status: status}}}
            if(data === '28012017'){update = {'28012017': {ordem: ordem, status: status}}}
            if(data === '29012017'){update = {'29012017': {ordem: ordem, status: status}}}
            if(data === '30012017'){update = {'30012017': {ordem: ordem, status: status}}}
            if(data === '31012017'){update = {'31012017': {ordem: ordem, status: status}}}

        this.model.updateAsync(nome, {$set: update}, {multi: false})
        .then(function(err, data){
            res.json(req.body);
        })
        .catch(next);
    };//fim do update
 
               
}

module.exports = function(usuarioModel){
    return new usuarioController(usuarioModel);
}


