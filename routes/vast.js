var express = require('express'),
		cors = require('cors'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    parseUrlEncoded = bodyParser.urlencoded({extended: false});

router.route('/')
  .get(cors(), function(req, res){
    var vastTagElements = {
      "id": 12345,
      "markup": "<div id=\"some-id\">Content</div>",
      "clickUrl": "http://gumgum.com/"
    };
    res.json(vastTagElements);
  });

module.exports = router;