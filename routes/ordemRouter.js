var express = require('express');
var router = express.Router();
var obj = require('../config/ordem');
var mongoose = require('../db/mongoose');
var usuarioModel = require('../models/ordemModel')(mongoose, obj);
var usuarioController = require('../controllers/ordemController')(usuarioModel);
var jwt = require('jwt-simple');
var moment = require('moment');


var middlewareAuth = function(request, response, next){
    var token = request.query.token || request.headers['x-acess-token'];
    if(!token){
        var err = new Error('Forbidden');
        err.status = 403;
        return next(err);
    }
    try{
        var decoded = jwt.decode(token, 'segredo');
        var isExpired = moment(decoded.exp).isBefore(new Date());
        if(isExpired){
            var err = new Error('Unauthorized');
            err.status = 401;
            return next(err);
        }else {
            request.user = decoded.user;
            next();
        }
    } catch(err){
        return next(err);
    }
};


router.get('/', usuarioController.getAll.bind(usuarioController));
router.get('/ultimo', usuarioController.getLast.bind(usuarioController));
router.post('/numero', usuarioController.getOrdem.bind(usuarioController));
router.post('/', usuarioController.create.bind(usuarioController));
router.put('/escala', usuarioController.update.bind(usuarioController));


module.exports = router;