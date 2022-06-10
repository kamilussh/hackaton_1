import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import {
  ContactUsContainer,
  ContactUsContent,
  ContactUsDescription,
  ContactUsImage,
  ContactUsShopButton,
  ContactUsTitle,
} from "../../Styles/ContactUs/ContactUs";
import { NavLink } from "react-router-dom";

export default function ContactUs() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ContactUsContainer>
      <ContactUsImage src="/images/ContactUs/phone.gif" />
      <ContactUsContent>
        <Typography variant="h6">Contact us !</Typography>
        <ContactUsTitle variant="h2">Get in touch with us</ContactUsTitle>
        <ContactUsDescription variant="subtitle">
          Everything that you will need this summer. From swimsuits to
          costumes!From sandales to hats! Purchase right now! <br /> +996 556
          165 565
        </ContactUsDescription>
        <NavLink to="/products" style={{ textDecoration: "none" }}>
          <ContactUsShopButton color="secondary">
            Contact us
          </ContactUsShopButton>
        </NavLink>
      </ContactUsContent>
    </ContactUsContainer>
  );
}
