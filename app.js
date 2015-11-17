var express = require('express'),
    app = express();
    
app.get('/', function(req, res){
  res.redirect(301, '/products');
});

app.get('/products', function(req, res){
  res.json({
	  "products": [
	    {
	      "name": "Toothbrush",
	      "price": 15.49,
	      "description": "The world's first toothbrush of its kind with Bluetooth communication between brush and smartphone",
	      "qtyAvailable": 4,
	      "image": "http://media.oralb.com/en-US/assets/images/products/gallery/pulsonic34.jpg",
	      "tags": ["Hygiene"]
	    },
	    {
	      "name": "Hand Towels",
	      "price": 5.00,
	      "description": "2-pack of cotton bath towels, size 16\" x 30\" inches",
	      "qtyAvailable": 100,
	      "image": "http://images.cb2.com/is/image/CB2/SmithHandTowelBlueGreenS15/&$web_zoom$&/1411031640/smith-blue-green-hand-towel.jpg",
	      "tags": ["Towel"]
	    },
	    {
	      "name": "Shower Curtain",
	      "price": 29.99,
	      "description": "Guaranteed not to mildew",
	      "qtyAvailable": 0,
	      "image": "https://cdn-img-2.wanelo.com/p/2dd/49d/8f8/da0f357529dbbeb0d1c3ef4/x354-q80.jpg",
	      "tags": ["Shower"]
	    },
	    {
	      "name": "Shower Towel",
	      "price": 19.99,
	      "description": "Woven with heavyweight Egyptian cotton for softness, absorbency, and durability",
	      "qtyAvailable": 3,
	      "image": "http://65e226e929a5af0b2a5c-b2b05f995fc8916f7d7814d5d83ccb0d.r53.cf3.rackcdn.com/products/1000/etoile-pierre-bath-sheet.jpg",
	      "tags": ["Shower", "Towel"]
	    },
	    {
	      "name": "Floss",
	      "price": 0.99,
	      "description": "Effectively removes tough plaque between teeth and just below the gum line.",
	      "qtyAvailable": 0,
	      "image": "https://franklyjusthealthy.files.wordpress.com/2011/11/dental-floss.jpg",
	      "tags": ["Hygiene"]
	    }
	  ]
	});
});

var server = app.listen(process.env.PORT || 3000, function(){
  var host = server.address().address,
      port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});