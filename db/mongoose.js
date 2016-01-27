var config = require('../config/cnn');
var mongoose = require('mongoose');
var debug    = require('debug')('users:db');
var fc = require('../config/usuario');
'use strict';
function _connection(){
    var username = config.username,
        password = config.password,
        server = config.server,
        port = config.port,
        database = config.database,
        auth = username ? username + ':' + password + '@' : '';
    return 'mongodb://' + auth + server + ':' + port + '/' + database;
}

mongoose.connect(_connection());
var db = mongoose.connection;
db.on('error', function(err){
    debug(err);
});

db.once('open', function(cb){
    debug('connected to mongodb');
})

module.exports = mongoose;