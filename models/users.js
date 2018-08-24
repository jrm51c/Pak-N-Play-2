// Import the ORM to create functions that will interact with the database.
//var orm = require("../config/orm.js");

//Import the mongo model
var mongoose = require("mongoose"),
    UserAccount = mongoose.model("useraccount");

var User = {
  all: function(cb) {
    // orm.all("user_accounts", function(res) {
    //   cb(res);
    // });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    // orm.create("user_accounts", cols, vals, function(res) {
    //   cb(res);
    // });
  },
  update: function(objColVals, condition, cb) {
    UserAccount.update(condition, objColVals, function(err, userAccount){
      cb(err, userAccount);
    });
  },
  delete: function(id, cb) {
    UserAccount.remove({_id: id}, function(err){
      cb(err);
    })
  },
  createAccount: function(account, cb) {
    console.log("What's in " + JSON.stringify(account))
    var userAccount = new UserAccount(account);
    userAccount.save(function(err, savedAccount){
      cb(err, savedAccount);
    });
  },
  findUser: function(email, password, cb) {
    UserAccount.findOne({$and: [
      {email: email}, 
      {password: password}
    ]}, function(err, user){
      cb(err, user);
    })
  },
  findById: function(id, cb){
    UserAccount.findById(id, function(err, user){
      cb(err, user);
    });
  }
};

// Export the database functions for the controller (passport.js).
module.exports = User;
/* var connection = mysql.createConnection({

    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "paknplay_db"
}); */