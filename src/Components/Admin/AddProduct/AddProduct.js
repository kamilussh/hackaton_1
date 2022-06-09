import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { productContext } from "../../../Context/ProductContext";
import "./AddProduct.css";

const initObj = {
  type: "",
  description: "",
  price: 0,
  img1: "",
};

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [inpValues, setInpValues] = useState(initObj);

  const alertToastify = () => {
    toast.error("Заполните все поля!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
    console.log(obj);
  };

  const clearInput = () => {
    setInpValues(initObj);
  };

  const handleSave = (e) => {
    if (
      inpValues.name.trim() === "" ||
      inpValues.type.trim() === "" ||
      inpValues.description.trim() === "" ||
      inpValues.price.toString().trim() === "" ||
      inpValues.img1.trim() === ""
    ) {
      alertToastify();
      return;
    }
    e.preventDefault();
    addProduct(inpValues);
    clearInput();
  };

  return (
    <form className="inp" onSubmit={(e) => handleSave(e)}>
      <div className="inputs">
        <div>
          <TextField
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
            value={inpValues.name}
            name="name"
            onChange={(e) => handleChange(e)}
            className="inp2"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Type"
            variant="outlined"
            value={inpValues.type}
            name="type"
            onChange={(e) => handleChange(e)}
            className="inp2"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={inpValues.description}
            name="description"
            onChange={(e) => handleChange(e)}
            className="inp3"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            type="number"
            label="Price"
            variant="outlined"
            value={inpValues.price}
            name="price"
            onChange={(e) => handleChange(e)}
            className="inp4"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Image"
            variant="outlined"
            value={inpValues.img1}
            name="img1"
            onChange={(e) => handleChange(e)}
            className="inp5"
          />
        </div>

        <div>
          <Button
            onClick={handleSave}
            type="button"
            variant="contained"
            className="btnSave"
          >
            Save
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
