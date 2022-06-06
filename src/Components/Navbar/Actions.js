import { ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../Styles/Navbar/NavBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Actions() {
  return (
    <MyList type="row">
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
      <ListItemButton>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
      </ListItemButton>
    </MyList>
  );
}
