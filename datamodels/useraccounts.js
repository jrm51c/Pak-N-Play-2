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