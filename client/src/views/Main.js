import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// components
import ProductForm from "../components/ProductForm";
import AllProducts from "../components/AllProducts";
import SingleProduct from "../components/SingleProduct";

const Main = () => {
  const [getProducts, setGetProducts] = useState(false);

  return (
    <div>
      <h1>Product Manager</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductForm
                setGetProducts={setGetProducts}
                getProducts={getProducts}
              />
              <AllProducts getProducts={getProducts} />
            </>
          }
        />
        <Route path="/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default Main;
