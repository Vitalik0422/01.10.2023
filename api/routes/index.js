var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});
router.post('/get', function(req, res, next) {
  res.send('hello');
});


module.exports = router;
