var express = require('express'),
		cors = require('cors'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    path = require('path'),
    parseUrlEncoded = bodyParser.urlencoded({extended: false});

router.route('/')
  .get(cors(), function(req, res){
    res.set('Content-Type', 'text/xml');
    res.sendFile(path.join(__dirname, '../routes', 'test.xml'));
  });

module.exports = router;