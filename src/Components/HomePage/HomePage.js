import { Container } from "@mui/material";
import React from "react";
import MainRoutes from "../../MainRoutes";
import AddProduct from "../Admin/AddProduct/AddProduct";
import Banner from "../Banner/Banner";
import NavBar from "../Navbar/NavBar";
import Promotions from "../Promotions/Promotions";

const HomePage = () => {
  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        {/* <NavBar /> */}

        <Banner />
        <Promotions />
      </Container>
    </div>
  );
};

export default HomePage;
