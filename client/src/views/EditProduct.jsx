import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  //const [editProduct, setEditProduct] = useState({});
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => console.log("Response: ", res))
      .catch((err) => console.log("Error: ", err));
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h1>Edit Page</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <p>
            Title:
            <input
              type='text'
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </p>
        </div>
        <div>
          <p>
            Price:
            <input
              type='number'
              value={price || ""}
              onChange={(e) => setPrice(e.target.value)}
            />
          </p>
        </div>
        <div>
          <p>
            Description:
            <input
              type='text'
              value={description || ""}
              onChange={(e) => setDescription(e.target.value)}
            />
          </p>
        </div>
        <button>Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;
