import { ThemeProvider } from "@mui/system";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./Styles/Theme/Theme";
import NavBar from "./Components/Navbar/NavBar";

import Footer from "./Components/Footer/Footer";
import AppDrawer from "./Components/Drawer/Drawer";
import { UIProvider } from "./Context/UI/Context";
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/Authorization/AuthContext";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
            }}
          >
            <UIProvider>
              <NavBar />
              <MainRoutes />
              <Footer />
              <AppDrawer />
            </UIProvider>
          </Container>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
