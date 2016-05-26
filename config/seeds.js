require('dotenv').load();

var mongoose = require('./database');

var User = require('../models/user');
var Product = require('../models/product')

var user = [
  {name: "Angie Zazueta", email: "angiewzazueta@gmail.com", admin: "true", password: "12345", passwordConformation: "12345"},
  {name: "test1", email: "test1@test1.com", password: "test1", passwordConformation:"test1", admin: "false"},
  {name: "Joe Dirt", email: "abc@123.com", password: "123", passwordConformation:"123", admin: "false"},

]

var product = [
  {name: "Tribal Dress", price: "$58.00", size: "M", color: "blue print", quantity: "1", type: "dress", imageURL: "http://i.imgur.com/vROIYiv.jpg"},
  {name: "Denim Romper", price: "$35.00", size: "M", color: "Denim Blue", quantity: "1", type: "romper", imageURL: "http://i.imgur.com/NvidVfl.jpg"},
  {name: "Sun Dress", price: "$25.00", size: "M", color: "red flowers", quantity: "1", type: "dress", imageURL: "http://i.imgur.com/ZKkN0td.jpg"},
]

Product.create(product, function(err, products) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + product.length + " products.")
    }
  })

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(user, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
      mongoose.connection.close();
    }
    process.exit();
  });
});

