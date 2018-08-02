var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var itemSchema = new Schema({
    item_name: String,
    price: Number,
    purchased: Boolean
});

mongoose.model("item", itemSchema);