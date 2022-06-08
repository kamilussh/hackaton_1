import axios from "axios";
import { createContext, useReducer } from "react";
import { useLocation } from "react-router-dom";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  console.log(location.search);

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };

  const getProducts = async () => {
    const { data } = await axios.get(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  const getProductsDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_PRODUCTS_DETAILS",
      payload: data,
    });
  };
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  return (
    <productContext.Provider
      value={{
        products: state.products,

        addProduct,
        getProducts,
        getProductsDetails,
        deleteProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
