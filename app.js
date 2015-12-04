var express = require('express'),
    app = express(),
    products = require('./routes/products'),
    vast = require('./routes/vast'),
    vastxml = require('./routes/vastxml');

app.route('/').get(function(req, res){
  res.redirect(301, '/products');
});

app.use('/products', products);
app.use('/vast', vast);
app.use('/vastxml', vastxml);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port,
      currentTime = +new Date();

  console.log('App listening on port %s, at %s.', port, currentTime);
});