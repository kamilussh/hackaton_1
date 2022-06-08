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

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerImage src="/images/Banner/girl.png" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New arrival</BannerTitle>
        <BannerDescription variant="subtitle">
          Everything that you will need this summer. From swimsuits to
          costumes!From sandales to hats! Purchase right now!
        </BannerDescription>
        <BannerShopButton color="primary">Shop now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
