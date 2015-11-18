var express = require('express'),
    app = express(),
    products = require('./routes/products'),
    feed = require('./routes/feed');

app.route('/').get(function(req, res){
  res.redirect(301, '/products');
});

app.use('/products', products);
app.use('/feed', feed);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port,
      currentTime = +new Date();

  console.log('App listening on port %s, at %s.', port, currentTime);
});