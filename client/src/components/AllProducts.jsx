import React, { useState, useEffect } from "react";
import axios from "axios";
// components
import Product from "./Product";

const AllProducts = ({ getProducts }) => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [getProducts]);
  return (
    <div>
      <h2>All Products</h2>
      {allProducts.map((product, idx) => (
        <Product product={product} key={idx} />
      ))}
    </div>
  );
};

export default AllProducts;
