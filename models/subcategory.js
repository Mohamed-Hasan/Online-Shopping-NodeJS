var mongoose = require("mongoose");
var Category = require("./category");


// ORM Mapping ...
var Schema = mongoose.Schema;

var subcategorySchema = new Schema({
  subcatId: { type: Number, required: true },
  subcatName: { type: String, required: true },
  categoryId : { type: Schema.Types.ObjectId, ref: "Category"},
});

// Register ...
module.exports = mongoose.model("Subcategory", subcategorySchema);
