import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../Styles/Banner/Banner";
import { NavLink } from "react-router-dom";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/images/Banner/kuromi.png" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New arrival</BannerTitle>
        <BannerDescription variant="subtitle">
          Everything that you will need this summer. From swimsuits to
          costumes!From sandales to hats! Purchase right now!
        </BannerDescription>
        <NavLink to="/products" style={{ textDecoration: "none" }}>
          <BannerShopButton color="secondary">Shop now</BannerShopButton>
        </NavLink>
      </BannerContent>
    </BannerContainer>
  );
}
