var express = require('express');
var router = express.Router();
var User = require('../app/models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/add/pick', function(req, res, next) {
//   console.log('got here: ', req.user);
//   User.find({ user: req.user.facebook._id }, function(err, user) {
//     console.log('the user: ', user);
//     user.facebook.picks.id = req.body.picks.id;
//     user.facebook.picks.team = req.body.picks.team;
//     user.facebook.picks.score = req.body.picks.score;
//     console.log(user.body.picks)
//     var addPick = {id: user.facebook.picks.id, team: user.facebook.picks.team, score: user.facebook.picks.score};

//   });
// })

module.exports = router;
