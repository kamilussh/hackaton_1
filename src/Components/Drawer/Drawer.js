import {
  alpha,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { lighten } from "polished";
import { Colors } from "../../Styles/Theme/Theme";
import { useUIContext } from "../../Context/UI/Context";
import { DrawerCloseButton } from "../../Styles/Navbar/NavBar";
import { NavLink } from "react-router-dom";
import LiveSearch from "../LiveSearch/LiveSearch";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function AppDrawer() {
  const { drawerOpen, SetDrawerOpen } = useUIContext();
  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => SetDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <LiveSearch />
          <NavLink to="/" style={{ textDecoration: "none", color: "#FF69B4" }}>
            <ListItemButton>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </NavLink>
          <MiddleDivider />
          <NavLink
            to="/products"
            style={{ textDecoration: "none", color: "#FF69B4" }}
          >
            <ListItemButton>
              <ListItemText>Products</ListItemText>
            </ListItemButton>
          </NavLink>
          <MiddleDivider />
          <NavLink
            to="/add"
            style={{ textDecoration: "none", color: "#FF69B4" }}
          >
            <ListItemButton>
              <ListItemText>Add Product</ListItemText>
            </ListItemButton>
          </NavLink>
          <MiddleDivider />
          <NavLink
            to="/aboutus"
            style={{ textDecoration: "none", color: "#FF69B4" }}
          >
            <ListItemButton>
              <ListItemText>About Us</ListItemText>
            </ListItemButton>
          </NavLink>
          <MiddleDivider />
          <NavLink
            to="/contactus"
            style={{ textDecoration: "none", color: "#FF69B4" }}
          >
            <ListItemButton>
              <ListItemText>Contact Us</ListItemText>
            </ListItemButton>
          </NavLink>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
}
