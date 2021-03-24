var express = require('express');
var router = express.Router();
var x;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    x=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(x == 0)
      x=Math.random()
    res.write('Math.round of '+x+" is "+Math.round(x)+"\n");
    res.end('Math.fround of  '+x+" is "+Math.fround(x)+"\n");
    
 });

module.exports = router;