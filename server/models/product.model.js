// Import mongoose to build model
const mongoose = require("mongoose");
// Declare schema
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String },
    price: { type: Number },
    description: { type: String },
  },
  { timestamps: true }
);
// Declare model
const Product = mongoose.model("Product", ProductSchema);
// Export model
module.exports = Product;
