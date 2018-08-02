var express = require("express");
var passport = require("passport");
var bodyParser = require("body-parser");
var session = require("express-session");
var flash = require("connect-flash");
var mysql = require("mysql");
var path = require("path");
var exphnd = require("express-handlebars");
var app = express();
var auth = require("./middleware/auth");
const jwt = require('jwt-express');
//Add the mongoose initializer
require("./config/mongoose");
//Add the passport configureation
require("./passport/passport");

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
//change views directory to public, and move CSS and other stuff to it. Compare to what's in public directory on cats activity
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(jwt.init("WCFQC9PY8QAFVHUR6XZHG225ZGG5GFTJGILN", {
  cookies: false
}));
app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.engine("handlebars", exphnd({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Add unauthenticated controllers
require("./controllers/unauthenticated")(app, jwt);

//Require auth middleware
app.use(auth.validateRequest);

//Add authenticated controllers
require("./controllers/itemsController")(app, jwt);
require("./controllers/index.js")(app, jwt);

//Start listening
app.listen(PORT, () => {
    console.log("App listening on PORT: localhost:" + PORT);
});

