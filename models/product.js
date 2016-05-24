var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

mongoose.Promise = Promise;

var productSchema = new mongoose.Schema({
  size: String,
  color: String,
  quantity: Number,
  type: String,
  imageURL: String,
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;
