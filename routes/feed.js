var express = require('express'),
		cors = require('cors'),
    router = express.Router();

router.route('/')
  .get(cors(), function(req, res){
    
    // Generate random number between 1 & 10
    var randomNumber = parseInt(Math.random() * (12 - 1) + 1);
    
    // Return empty object or pollen_index, for testing
    if (randomNumber === 0 || randomNumber === 3 || randomNumber === 6){
      res.json({});
    } else {
      res.json({'has feed': true, 'pollen_index': randomNumber});
    };
    
  });

module.exports = router;