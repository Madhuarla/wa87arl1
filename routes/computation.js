var express = require('express');
var router = express.Router();
var calc;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    calc=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(calc == 0)
      calc=Math.random()
    res.write('Math.round of '+calc+" is "+Math.round(calc)+"\n");
    res.write('Math.fround of '+calc+" is "+Math.fround(calc)+"\n");
    
 });

module.exports = router;