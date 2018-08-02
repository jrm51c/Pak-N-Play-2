// Import MySQL connection.
var connection = require("../config/config.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  findByID: function(tableInput, email, password, done) {
    console.log(email + "what email is there to compare")
    connection.query("select * from " + tableInput + " where email = ?", [email], function (err, rows, user) {
      console.log(rows)
      console.log(err + "error?")
      if (err) { return done(err); }
      var dbEmail = rows[0].email;
      console.log(dbEmail + "should be the database email")
      if (dbEmail != email) { 
        console.log("username does not exist")
        return done(null, false, { message: 'Incorrect username.' }); }
      var dbPassword  = rows[0].password;
      if (!(dbPassword == password)) {
                  console.log("passwords aren't equal")
                    return done(null, false, { message: 'Incorrect password.' });
                 }
      user = rows[0]
      console.log(JSON.stringify(user) + "is there a user?")
      return done(null, user);
  })
  },
  createAccount: function(tableInput, account, cb) {
    console.log("do we get to ORM?")
    console.log(account.first_name + ", " + account.last_name + ", " + account.password +", " + account.street_address + ", " + account.city + ", " +  account.state + ", " + account.email)
    connection.query ( "INSERT INTO " + tableInput + " SET ?",
    {
      first_name: account.first_name,
      last_name: account.last_name,
      password: account.password,
      street_address: account.street_address,
      city: account.city,
      state: account.state,
      email: account.email
    },function (err, account) {
      
    if (err) { return cb(err); }
      // if (!(user)) { 
      //   return done(null, false, { message: 'Incorrect username.' }); }
      // var dbPassword  = rows[0].password;
      // if (!(dbPassword == password)) {
      //             console.log("passwords aren't equal")
      //               return done(null, false, { message: 'Incorrect password.' });
      //            }
      // user = rows[0]
      // console.log(JSON.stringify(user) + "is there a user?")
      return cb(null, account);
  })
  }
}

module.exports = orm;