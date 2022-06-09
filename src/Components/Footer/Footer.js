import {
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { FooterTitle, SubscribeTf } from "../../Styles/Footer/Footer1";
import { Colors } from "../../Styles/Theme/Theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={15} lg={4}>
          <FooterTitle variant="body1">About Us</FooterTitle>
          <Typography variant="caption2">
            We are the first store in Kyrgyzstan <br />
            with grunge and pop style clothing! <br />
            Follow us on social media to see all updates.
            <br />
          </Typography>
          <Box sx={{ mt: 10, color: Colors.dove_gray }}>
            <IconButton>
              <FacebookIcon
                sx={{ mr: 1 }}
                onClick={() =>
                  window.open("https://www.facebook.com/", "_blank")
                }
              />
            </IconButton>
            <IconButton>
              <TwitterIcon
                sx={{ mr: 1 }}
                onClick={() =>
                  window.open("https://twitter.com/?lang=en", "_blank")
                }
              />
            </IconButton>
            <IconButton>
              <InstagramIcon
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/stunner.stock/",
                    "_blank"
                  )
                }
              />
            </IconButton>
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <NavLink
              to="/auth"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  Login
                </Typography>
              </ListItemText>
            </NavLink>
            <NavLink
              to="/cart"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  My Cart
                </Typography>
              </ListItemText>
            </NavLink>
            <NavLink
              to="/auth"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItemText>
                <Typography lineHeight={2} variant="caption2">
                  My Account
                </Typography>
              </ListItemText>
            </NavLink>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
