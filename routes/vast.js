var express = require('express'),
		cors = require('cors'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    parseUrlEncoded = bodyParser.urlencoded({extended: false});

router.route('/')
  .get(cors(), function(req, res){
    var vastTagElements = {
      "id": 12345,
      "markup": "<div id=\"mGGUID\" align=\"left\" style=\"_CLEARCSS_;cursor:pointer;height:120px;overflow:hidden;\"> <img onmouseout=\"this.src='//c.gumgum.com/ads/com/gumgum/close/RM_29x31.png'\" onmouseover=\"this.src='//c.gumgum.com/ads/com/gumgum/close/RMO_29x31.png'\" src=\"//c.gumgum.com/ads/com/gumgum/close/RM_29x31.png\" style=\"border:0;margin:0;padding:0;background-color:transparent;cursor:pointer;cursor:hand;position:absolute;top:28px;right:5px;width:29px;height:31px;z-index:1;\" onclick=\"document.getElementById('mGGUID').style.display='none';\"> <div align=\"left\" id=\"adGGUID\" style=\"text-align:left;width:100%;height:120px;position:absolute;overflow:hidden;margin:0px 0px 0px 0px;font:normal 0/120px arial; cursor:pointer;top:5px;\"> <br style=\"display:none;\" /> <style> #adGGUID, #adGGUID * {padding:0;margin:0;border:none;font:normal 0/117px arial;cursor:pointer} #hoGGUID {background:transparent url(http://c.gumgum.com/ads/com/gumgum/bg/trans.gif) no-repeat scroll 0 0;position:absolute; width: 100%; height: 120px; left: 0px; top: 0px;} #bgGGUID {height: 100%;margin-left: 0px;background: url(https://c.gumgum.com/ads/com/walt_disney_world/food_and_wine_q4_15/studio/00st_tile.png) repeat-x scroll 0px 0px;} #imGGUID {background-repeat:no-repeat; background-position: top left;height:100%;position:absolute;top:0px;left:50%;} #coGGUID {background-repeat:no-repeat; background-position: 0px -120px; display:none;position:absolute;height: 100%; left: 50%; top: 0px;} /* Multiple sizes*/ #mGGUID .spGGUID {background-image: url(https://c.gumgum.com/ads/com/walt_disney_world/food_and_wine_q4_15/studio/00st_600.png);width:600px;margin-left:-300px;} </style> <div id=\"imGGUID\" class=\"spGGUID\"> <img id=\"piGGUID\" style=\"display:none\" src=\"//c.gumgum.com/images/pixel.gif?GGUID\" /> </div> <div id=\"coGGUID\" class=\"spGGUID\"> </div> <div id=\"bgGGUID\" style=\"margin-left:0px;\"> </div> <a id=\"hoGGUID\" href=\"https://www.gumgum.com\" target=\"_blank\" onmouseover=\"document.getElementById('coGGUID').style.display='block';\" onmouseout=\"document.getElementById('coGGUID').style.display='none';\"> </a> </div> <img src=\"\" style=\"display:none;visibility:hidden;\" /> </div>",
      "clickUrl": "http://gumgum.com/"
    };
    res.json(vastTagElements);
  });

module.exports = router;