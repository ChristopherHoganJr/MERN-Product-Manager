import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setSingleProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{singleProduct.title}</h1>
      <p>Price: {singleProduct.price}</p>
      <p>Description: {singleProduct.description}</p>
    </div>
  );
};

export default SingleProduct;
