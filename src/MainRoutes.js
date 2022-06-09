import React from "react";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Auth/Login";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import Cart from "./Components/Cart/Cart";
import HomePage from "./Components/HomePage/HomePage";
import ProductDetails from "./Components/Products/ProductDetails";

// import NavBar from "./Components/Navbar/NavBar";
import ProductsList from "./Components/Products/ProductList";
import { Route, Routes } from "react-router";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/products" element={<ProductsList />} />
    </Routes>
  );
};
export default MainRoutes;
