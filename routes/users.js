var express = require('express');
var router = express.Router();
var User = require('../app/models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add/pick', function(req, res, next) {
  // var user = new User();

  // user
  console.log(req.body);
})

module.exports = router;
