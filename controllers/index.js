var paknplay = require("../models/inventory");
var items = require("../models/items");

module.exports = function(app, jwt) {
  app.get("/", function (req, res) {
    items.all(function(err, data) {
      
      var hbsObject = {
        items: data,
        user: req.user.first_name
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
/* var connection = mysql.createConnection({

    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "paknplay_db"
}); */
  app.get("/api/paknplay", function(req, res) {
    paknplay.all(function(data) {
      var invObject = {
        paknplays: data
      };
      console.log(invObject);
      res.render("index", invObject);
      //what does "index" refer to? edit this perhaps?
    });
  });

  app.post("/api/paknplay", function(req, res) {
    paknplay.create([
      "item name", "qty"
      //edit this so it coincides with SQL database fields
    ], [
      req.body.name, req.body.qty
      //edit this to coincide with SQL database columns
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });
}
