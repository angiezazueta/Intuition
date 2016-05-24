var express = require('express');
var router = express.Router();

var usersCtrl = require('../controllers/users');

// Require token authentication.
var token = require('../config/token_auth');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});


router.route('/api/users')
  .post(usersCtrl.create);

router.route('/api/users/me')
  .get(token.authenticate, usersCtrl.me);
// when creating the route for addtobag use tokenn.authenticate
router.route('/api/token')
  .post(token.create);




// router.get('*', function(req, res, next) {
//   res.redirect('/');
// });

module.exports = router;
