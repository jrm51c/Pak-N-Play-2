var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var userAccountSchema = new Schema({
    first_name: String,
    last_name: String,
    password: String,
    street_address: String,
    city: String,
    state: String,
    email: String
});

mongoose.model("useraccount", userAccountSchema);

/* var connection = mysql.createConnection({

    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "paknplay_db"
}); */