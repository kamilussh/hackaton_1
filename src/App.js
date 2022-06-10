import { ThemeProvider } from "@mui/system";
import { Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./Styles/Theme/Theme";
import NavBar from "./Components/Navbar/NavBar";

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
import FavoriteContextProvider from "./Context/FavoriteContext";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <FavoriteContextProvider>
          <ProductContextProvider>
            <ThemeProvider theme={theme}>
              <UIProvider>
                <NavBar />
                <CartContextProvider>
                  <MainRoutes />
                </CartContextProvider>

                <Footer />
                <AppDrawer />
              </UIProvider>
            </ThemeProvider>
          </ProductContextProvider>
        </FavoriteContextProvider>

        <ProductContextProvider />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
