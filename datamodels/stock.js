var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var stockSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: "useraccount"},
    item_type: String,
    item_name: String,
    item_description: String,
    quantity: Number,
    total_uses: Number,
    updated_at: Date,
    created_at: { type: Date, default: Date.now }
});

mongoose.model("stock", stockSchema);


/* var connection = mysql.createConnection({

    host: process.env.DB_HOST || "localhost",
    port: 3306,
    user: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_DATABASE || "paknplay_db"
}); */