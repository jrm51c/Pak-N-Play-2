"use strict";

var mongoose = require("mongoose")
    , fs = require("fs")
    , models_path = process.cwd() + "/datamodels/"
	, local = "mongodb://localhost:27017/paknplay"
	, remote = "mongodb://";


var currentEnvironment = local;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";  //"mongodb://localhost/ // dave added

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, {server:{auto_reconnect:true}}); //currentEnvironment

var db = mongoose.connection;

db.on("error", function (err) {
    console.error("MongoDB connection error:", err);
});

db.once("open", function callback() {
    console.info("MongoDB connection is established");
});

db.on("disconnected", function() {
    console.error("MongoDB disconnected!");
    mongoose.connect(currentEnvironment, {server:{auto_reconnect:true}});
});

db.on("reconnected", function () {
    console.info("MongoDB reconnected!");
});

fs.readdirSync(models_path).forEach(function (file) {
    if (~file.indexOf(".js"))
        require(models_path + file);
});

/* var connection = mysql.createConnection({

    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "paknplay_db"
}); */