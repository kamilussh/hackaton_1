import { IconButton } from "@mui/material";
import { NavBarContainer, NavBarHeader } from "../../Styles/Navbar/NavBar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";

export default function NavBarMobile({ matches }) {
  return (
    <NavBarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <NavBarHeader textAlign={"center"} variant="h4">
        Stunner.Stock
      </NavBarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </NavBarContainer>
  );
}
