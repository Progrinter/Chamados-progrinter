
var app = require('./config/config')();




http.listen(process.env.PORT || 8080, function(){
  console.log('listening on', process.env.PORT|| 8080);
});