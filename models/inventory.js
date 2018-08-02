// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

var mongoose = require("mongoose"),
    Stock = mongoose.model("stock");

var inventory = {
  all: function(cb) {
    Stock.find({}, function(err, stock){
      cb(err, stock);
    })
  },
  // The variables cols and vals are arrays.
  create: function(data, cb) {
    var stock = new Stock(data);
    Stock.create(stock, function(err, createdStock){
      cb(err, createdStock);
    });
  },
  update: function(objColVals, condition, cb) {
    Stock.update(condition, objColVals, function(err, updateStock){
      cb(err, updatedStock);
    });
  },
  delete: function(id, cb){
    Stock.deleteOne({_id: id}, function(err){
      cb(err);
    });
  }
};

// Export the database functions for the controller (itemsController.js).
module.exports = inventory;
