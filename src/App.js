import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./Styles/Theme/Theme";
import NavBar from "./Components/Navbar/NavBar";
import Banner from "./Components/Banner/Banner";
import Promotions from "./Components/Promotions/Promotions";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import ProductContextProvider from "./Context/ProductContext";
import CartContextProvider from "./Context/CartContext";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <CartContextProvider>
          <ProductContextProvider>
            <MainRoutes />
          </ProductContextProvider>
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
