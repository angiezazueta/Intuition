var express = require('express');
var router = express.Router();

var usersCtrl = require('../controllers/users');
var productsController = require('../controllers/products')

// Require token authentication.
var token = require('../config/token_auth');


router.route('/products')
  .get(productsController.index)
  .post(productsController.create);

router.route('/products/:id')
  .get(productsController.show)
  .put(token.authenticate, productsController.update)
  .delete(productsController.destroy);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});

router.route('/users')
  .post(usersCtrl.create);

router.route('/users/me')
  .get(token.authenticate, usersCtrl.me);
// when creating the route for addtobag use token.authenticate
router.route('/token')
  .post(token.create);




// router.get('*', function(req, res, next) {
//   res.redirect('/');
// });

module.exports = router;
