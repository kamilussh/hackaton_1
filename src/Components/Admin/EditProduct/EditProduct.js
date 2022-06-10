import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../../Context/ProductContext";
import "./EditProducts.css";
const EditProduct = () => {
  const { productDetails, getProductsDetails, editProduct } =
    useContext(productContext);

  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  const [inpValues, setInpValues] = useState(productDetails);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSave = (e) => {
    e.preventDefault();
    editProduct(id, inpValues);
    navigate("/list");
  };

  return (
    <form onSubmit={(e) => handleSave(e)}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={inpValues.title}
        name="title"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Type"
        variant="outlined"
        value={inpValues.type}
        name="type"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Discription"
        variant="outlined"
        value={inpValues.description}
        name="description"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="Price"
        variant="outlined"
        value={inpValues.price}
        name="price"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="img1"
        variant="outlined"
        value={inpValues.img1}
        name="img1"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="img2"
        variant="outlined"
        value={inpValues.img2}
        name="img2"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="outlined-basic"
        label="img3"
        variant="outlined"
        value={inpValues.img3}
        name="img3"
        onChange={(e) => handleChange(e)}
      />

      <Button type="submit" variant="contained">
        Edit
      </Button>
    </form>
  );
};

export default EditProduct;
