import React from "react";
import { Route, Routes } from "react-router";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Auth/Login";
import HomePage from "./Components/HomePage/HomePage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Login />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
};

export default MainRoutes;
