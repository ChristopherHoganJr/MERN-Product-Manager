// Import the model
const Product = require("../models/product.model");

// Create a product
module.exports.createProduct = (req, res) => {
  console.log(req.body);
  Product.create(req.body)
    .then((product) => (res.json({ product }), console.log(product)))
    .catch((err) =>
      res.json({ message: "the product was not created", serverError: err })
    );
};

// Create a product
module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) =>
      res.json({ message: "the product was not created", serverError: err })
    );
};
