// Require resource's model(s).
var User = require("../models/user");
var Product = require("../models/product");



// create a new product
var createProduct = function (req, res) {
  Product.create(req.body, function(err, product){
    if (err) res.send(err);
    res.json(product);
  });
}

// return all products
var allProducts = function(req, res){
  Product.find({}, function(error, products){
    res.json(products);
  })
}

var productsByType = function(req, res){

console.log('productsByType: ' + req.params.type)

  Product.find({type: req.params.type}, function(error, products){
    res.json(products);
  })
}

module.exports = {
  allProducts: allProducts,
  productsByType: productsByType,
  createProduct: createProduct
};
