// Import the model
const Product = require("../models/product.model");

// Create a product
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newCreatedProduct) => res.json({ product: newCreatedProduct }))
    .catch((err) =>
      res.json({ message: "the product was not created", serverError: err })
    );
};
