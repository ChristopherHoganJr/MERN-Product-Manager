import React, { useState, useEffect } from "react";

// components
import ProductForm from "../components/ProductForm";
import AllProducts from "../components/AllProducts";

const Main = () => {
  const [getProducts, setGetProducts] = useState(false);

  return (
    <div>
      <h1>Product Manager</h1>
      <ProductForm setGetProducts={setGetProducts} getProducts={getProducts} />
      <AllProducts getProducts={getProducts} setGetProducts={setGetProducts} />
    </div>
  );
};

export default Main;
