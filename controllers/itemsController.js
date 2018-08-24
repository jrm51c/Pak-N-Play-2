// Import the model (items.js) to use its database functions.
var items = require("../models/items.js");

module.exports = function(app, jwt){
  // Create all our routes and set up logic within those routes where required.
  app.get("/api/items", function(req, res) {
    items.all(function(err, data) {
      res.json(data);
    });
  });

  app.post("/api/items", function(req, res) {
    items.create(req.body, function(err, result){
      if(!err){
        res.json({id: result._id});
      }
    });
  });

  app.put("/api/items/:id", function(req, res) {
    var condition = {_id : req.params.id};

    console.log("condition", condition);

    items.update({
      purchased: req.body.purchased
    }, condition, function(err, result) {
      if (err) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  app.delete("/api/items/:id", function(req, res) {
    items.delete(req.params.id, function(err) {
      if(err){
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
}

/* var connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "paknplay_db"
}); */

