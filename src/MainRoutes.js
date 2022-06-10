import React from "react";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Auth/Login";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import Cart from "./Components/Cart/Cart";
import HomePage from "./Components/HomePage/HomePage";
// import ProductDetails from "./Components/Products/ProductDetails";
import ProductDetails from "./Components/Products/ProductDetails";

// import NavBar from "./Components/Navbar/NavBar";
import ProductsList from "./Components/Products/ProductList";
import { Route, Routes } from "react-router-dom";
// import { Payment } from "@mui/icons-material";

import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Favorite from "./Components/Favorites/Favorite";
import Payment from "./Components/Payment/Payment.jsx";
// import  from "./Components/ContactUs/ContactUs";

// import Favorite from "./Components/Favorites/Favorite";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/contactus" element={<ContactUs />} /> */}
      <Route path="/payment" element={<Payment />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};
export default MainRoutes;
