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
  Product.find({}, function(err, products) {
    if (err) next(err);

    res.json(products);
  });
}

function show(req, res, next) {
  var id = req.params.id;

  Product.findById(id, function(err, product) {
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

  Product.findById(id, function(err, product) {
    if (err) next(err);

    product.name = req.body.name;
    product.price = req.body.price;
    product.size = req.body.size;
    product.color = req.body.color;
    product.quantity = req.body.quantity;
    product.type = req.body.type;
    product.imageURL = req.body.imageURL;


    product.save(function(err, updatedProduct) {
      if (err) next(err);

      res.json(updatedProduct);
    });

  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  Product.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'Product successfully deleted'});
  });
}
