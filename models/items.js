// Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

var mongoose = require("mongoose"),
    Item = mongoose.model("item");

var item = {
  all: function(cb) {
    Item.find({})
        .select({item_name: 1, price: 1, purchased: 1})
        .exec(function(err, items){
          cb(err, items);
        });
  },
  // The variables cols and vals are arrays.
  create: function(data, cb) {
    var item = new Item(data);
    item.save(function(err, savedItem){
      cb(err, savedItem);
    });
  },
  update: function(objColVals, condition, cb) {
    Item.update(condition, objColVals, function(err, savedItem){
      cb(err, savedItem);
    });
  },
  delete: function(id, cb) {
    Item.deleteOne({_id: id}, function(err){
      cb(err);
    });
  }
};

// Export the database functions for the controller itemsController.js).
module.exports = item;
