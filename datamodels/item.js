var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var itemSchema = new Schema({
    item_name: String,
    price: Number,
    purchased: Boolean
});

mongoose.model("item", itemSchema);

/* var connection = mysql.createConnection({

    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "paknplay_db"
}); */