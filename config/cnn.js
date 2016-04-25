var cnn = function(){
       /* var username = "kakalima76",
        password = "Ni244265",
        server = "ds060478.mongolab.com",
        port = "60478",
        database = "usuarios";*/
    
    var username = "",
        password = "",
        server = "localhost",
        port = "27017",
        database = "ccuusers";
    
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