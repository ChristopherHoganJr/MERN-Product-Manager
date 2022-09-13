import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setSingleProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (e) => {
    axios.delete(`http://localhost:8000/api/products/${id}`);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>{singleProduct.title}</h1>
      <p>Price: {singleProduct.price}</p>
      <p>Description: {singleProduct.description}</p>
      <Link to={`/${id}/edit`}>Edit Product</Link>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default SingleProduct;
