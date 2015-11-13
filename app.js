var express = require('express'),
    app = express();
    
app.get('/', function(req, res){
  res.send({
    page: "home",
    response: "home json"
  });
});

app.get('/test', function(req, res){
  res.send({
    page: "test",
    response: "test json"
  });
});

var server = app.listen(process.env.PORT || 3000, function(){
  var host = server.address().address,
      port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});