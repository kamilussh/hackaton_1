import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./Styles/Theme/Theme";
import NavBar from "./Components/Navbar/NavBar";
import Banner from "./Components/Banner/Banner";
import Promotions from "./Components/Promotions/Promotions";
import MainRoutes from "./MainRoutes";
import ProductContextProvider from "./Context/ProductContext";
import CartContextProvider from "./Context/CartContext";

import Footer from "./Components/Footer/Footer";
import AppDrawer from "./Components/Drawer/Drawer";
import { UIProvider } from "./Context/UI/Context";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/Authorization/AuthContext";
import PrimarySearchAppBar from "./Components/Navbar/NavBarDesktop";
import NavBarDesktop from "./Components/Navbar/NavBarDesktop";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <ThemeProvider theme={theme}>
            <NavBar />
            <Container
              maxWidth="xl"
              sx={{
                background: "#fff",
              }}
            >
              <UIProvider>
                {/* <NavBar /> */}
                <CartContextProvider>
                  <MainRoutes />
                </CartContextProvider>

                <Footer />
                <AppDrawer />
              </UIProvider>
            </Container>
          </ThemeProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
