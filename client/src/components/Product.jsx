import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/${product._id}`}>{product.title}</Link>
    </div>
  );
};

export default Product;
