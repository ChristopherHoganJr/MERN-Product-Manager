// Import the model
const Product = require("../models/product.model");

// Create a product
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((product) => (res.json({ product }), console.log(product)))
    .catch((err) =>
      res.json({ message: "the product was not created", serverError: err })
    );
};

// Get all Products
module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then((product) => res.json(product))
    .catch((err) =>
      res.json({ message: "the products were not found", serverError: err })
    );
};

// Get one product
module.exports.getOneProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) =>
      res.json({ message: "the product was not found", serverError: err })
    );
};

// Edit one product
module.exports.updateProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((product) => res.json(product))
    .catch((err) =>
      res.json({ message: "the product was not updated", serverError: err })
    );
};

// Delete one product
module.exports.deleteProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) =>
      res.json({ message: "the product was not deleted", serverError: err })
    );
};
