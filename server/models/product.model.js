// Import mongoose to build model
const mongoose = require("mongoose");
// Declare schema
const ProductSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    description: String,
  },
  { timestamps: true }
);
// Declare model
const Product = mongoose.model("product", ProductSchema);
// Export model
module.exports = Product;
