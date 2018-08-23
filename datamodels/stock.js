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


//<!-- testing <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
  //  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico"> -->