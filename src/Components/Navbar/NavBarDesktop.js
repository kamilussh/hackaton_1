import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  MyList,
  NavBarContainer,
  NavBarHeader,
} from "../../Styles/Navbar/NavBar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";

export default function NavBarDesktop({ matches }) {
  return (
    <NavBarContainer>
      <NavBarHeader>Stunner.Stock</NavBarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact us" />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions />
    </NavBarContainer>
  );
}