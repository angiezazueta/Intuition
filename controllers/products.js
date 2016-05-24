// var User = require("../models/user");
var Product = require("../models/product");

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}

function index(req, res, next) {
  Product.find({}, function(err, shows) {
    if (err) next(err);

    res.json(products);
  });
}

function show(req, res, next) {
  var id = req.params.id;

  Product.findById(id, function(err, show) {
    if (err) next(err);

    res.json(product);
  });
}

function create(req, res, next) {
  var newProduct = new Product(req.body);

  //newProduct.create?
  newProduct.save(function(err, savedProduct) {
    if (err) next(err);

    res.json(savedProduct);
  });

}

function update(req, res, next) {
  var id = req.params.id;

  Show.findById(id, function(err, show) {
    if (err) next(err);

    show.title = req.body.title;
    show.length = req.body.length;
    show.source = req.body.source;

    show.save(function(err, updatedShow) {
      if (err) next(err);

      res.json(updatedShow);
    });

  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  Show.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'Show successfully deleted'});
  });
}
