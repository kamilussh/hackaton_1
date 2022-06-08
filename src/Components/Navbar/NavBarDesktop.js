import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  MyList,
  NavBarContainer,
  NavBarHeader,
} from "../../Styles/Navbar/NavBar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { NavLink } from "react-router-dom";

export default function NavBarDesktop({ matches }) {
  return (
    <NavBarContainer>
      <NavBarHeader>Stunner.Stock</NavBarHeader>
      <MyList type="row">
        <NavLink to="/">
          <ListItemText primary="Home" />
        </NavLink>
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <NavLink to="/contactus">
          <ListItemText primary="Contact us" />
        </NavLink>
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </NavBarContainer>
  );
}
