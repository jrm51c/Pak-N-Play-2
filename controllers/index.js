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
/*   <!-- testing <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"> --> */
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
