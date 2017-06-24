
var app = require('./config/config')();


var http = require('http').Server(app);

http.listen(process.env.PORT || 8080, function(){
  console.log('listening on', process.env.PORT|| 8080);
});