import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, setGetProducts, getProducts }) => {
  const deleteHandler = (e) => {
    axios.delete(`http://localhost:8000/api/products/${product._id}`);
    setGetProducts(!getProducts);
  };
  return (
    <div>
      <Link to={`/${product._id}`}>{product.title}</Link>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Product;
