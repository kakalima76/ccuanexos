var cnn = function(){
        /*var username = "kakalima76",
        password = "Ni244265",
        server = "ds047315.mongolab.com",
        port = "47315",
        database = "ccuusers";*/
    
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