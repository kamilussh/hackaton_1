import {
  InputBase,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
} from "@mui/material";
import {
  MyList,
  NavBarContainer,
  NavBarHeader,
} from "../../Styles/Navbar/NavBar";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { NavLink } from "react-router-dom";
import LiveSearch from "../LiveSearch/LiveSearch";
import React from "react";
import { cartContext } from "../../Context/CartContext";
import "./NavBar.css";
import { authContext } from "../../Context/Authorization/AuthContext";

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

export default function NavBarDesktop({ matches }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const { user } = React.useContext(authContext);

  return (
    <NavBarContainer>
      <NavBarHeader id="header">Stunner Stock</NavBarHeader>
      <MyList type="row">
        <LiveSearch />
        <NavLink to="/" style={{ textDecoration: "none", color: "#FF69B4" }}>
          <ListItemText primary="Home" />
        </NavLink>
        <NavLink
          to="/products"
          style={{ textDecoration: "none", color: "#FF69B4" }}
        >
          <ListItemText primary="Products" />
        </NavLink>
        {user.email === "admin@mail.com" ? (
          <NavLink
            to="/add"
            style={{ textDecoration: "none", color: "#FF69B4" }}
          >
            <ListItemText primary="Add product" />
          </NavLink>
        ) : null}
        {/* <Search /> */}
        <NavLink
          to="/contactus"
          style={{ textDecoration: "none", color: "#FF69B4" }}
        >
          <ListItemText primary="Contact us" />
        </NavLink>
        {/* <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton> */}
      </MyList>
      <Actions matches={matches} />
    </NavBarContainer>
  );
}
