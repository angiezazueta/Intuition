var User = require("../models/user");

module.exports = {
  index: index,
  getBag: getBag,
  addToBag: addToBag,
  create: create,
  me:     me
};


var index = function(req, res, next){
  User.find({}, function(error, users){
    res.json(users);
  })
};

var getBag = function(req, res, next){
  User.find({email: req.email})
    .populate('products').exec(function(error, user){
    res.json(user);
  });
};

var addToBag = function(req, res){
  User.findOne({email: req.decoded.email}, function(error, user){
    if (error) res.json({message: 'Could not find user because ' + error});
    user.products.push(req.body.productId);
    user.save(function(err){
      res.json(user.products);
    })
  });
};

function create(req, res, next) {
  if (!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  var user = new User(req.body);
  user.admin = false;
  user.save()
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully created user.',
        data: {
          email: user.email,
          id:    user._id
        }
      });
    }).catch(function(err) {
      if (err.message.match(/E11000/)) {
        err.status = 409;
      } else {
        err.status = 422;
      }
      next(err);
    });
};

function me(req, res, next) {
  User
    .findOne({email: req.decoded.email}).exec()
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully retrieved user data.',
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
};
