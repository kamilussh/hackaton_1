import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  MyList,
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
} from "../../Styles/Navbar/NavBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../Styles/Theme/Theme";
import { NavLink } from "react-router-dom";

export default function Actions({ matches }) {
  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        <NavLink to="/cart ">
          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: matches && Colors.secondary,
              }}
            >
              <ShoppingCartIcon />
            </ListItemIcon>
          </ListItemButton>
        </NavLink>

        <Divider orientation="vertical" flexItem />
        <NavLink to="/favorite">
          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: matches && Colors.secondary,
              }}
            >
              <FavoriteIcon />
            </ListItemIcon>
          </ListItemButton>
        </NavLink>
        <Divider orientation="vertical" flexItem />
        {/* <NavLink to="/auth"> */}
        <NavLink to="/auth">
          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: matches && Colors.secondary,
              }}
            >
              <PersonIcon />
            </ListItemIcon>
          </ListItemButton>
        </NavLink>
        {/* </NavLink> */}
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  );
}
