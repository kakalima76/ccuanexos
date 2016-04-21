var http = require('http');
var https = require('https');
var obj = require('./config/autorizado');
var mongoose = require('./db/mongoose');
var usuarioModel = require('./models/modelAutorizado')(mongoose, obj);
var usuarioController = require('./controllers/autorizadoController')(usuarioModel);

usuarioController.countAll();