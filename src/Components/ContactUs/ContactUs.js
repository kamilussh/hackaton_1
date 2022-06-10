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
      <BannerImage src="/images/Banner/phone.gif" />
      <BannerContent>
        <BannerTitle variant="h2">Get in touch!</BannerTitle>
        <BannerDescription variant="subtitle">
          +996 556 165 565 <br /> +996 553 165 360
        </BannerDescription>

        <BannerShopButton color="secondary">Call us</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
