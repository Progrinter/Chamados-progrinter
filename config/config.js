var express = require(`express`);
var consign = require('consign');
var http = require('http').Server(app);


module.exports = function(){
    var app = express();
    
    app.set("view engine","ejs")
    app.set("views","./views");
    app.use(express.static('./resources'));
    
    consign().include('routes').into(app);



    return app;
}