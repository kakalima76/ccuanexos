var cnn = function(){
        var username = "",
        password = "",
        server = "191.232.39.223",
        port = "27017",
        database = "ccuusers";
    
    /*var username = "",
        password = "",
        server = "localhost",//"controleurbano.cloudapp.net",
        port = "27017",
        database = "ccuusers";*/
    
        return {
        "username": username,
        "password": password,
        "server": server,
        "port": port,
        "database": database
        }
}


var mongoose = new cnn();
module.exports = mongoose;