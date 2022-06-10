import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { productContext } from "../../Context/ProductContext";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import Paper from "@mui/material/Paper";
// import "./Products.css";
import "swiper/css";

import SwiperCore, { Thumbs } from "swiper";
import { cartContext } from "../../Context/CartContext";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();

  const { getProductsDetails, productDetails } = useContext(productContext);
  const { addProductToCart } = useContext(cartContext);

  useEffect(() => {
    getProductsDetails(id);
    console.log(productDetails, "details useeffect");
  }, []);

  return (
    <section className="product__block-details">
      {productDetails ? (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2"
              >
                <SwiperSlide>
                  <img
                    width={400}
                    src={productDetails.img1}
                    alt={productDetails.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    width={400}
                    src={productDetails.img2}
                    alt={productDetails.title}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    width={400}
                    src={productDetails.img3}
                    alt={productDetails.title}
                  />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper1"
              >
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img
                      width={80}
                      src={productDetails.img1}
                      alt={productDetails.title}
                    />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img
                      width={80}
                      src={productDetails.img2}
                      alt={productDetails.title}
                    />
                  </Paper>
                </SwiperSlide>
                <SwiperSlide>
                  <Paper elevation={3}>
                    <img
                      width={80}
                      src={productDetails.img3}
                      alt={productDetails.title}
                    />
                  </Paper>
                </SwiperSlide>
              </Swiper>
            </Grid>

            <Grid item xs={6} sx={{ mt: 5 }}>
              {/* <Typography
              variant="h6"
              gutterBottom
              component="h3"
              sx={{
                fontWeight: 300,
                letterSpacing: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <MemoryIcon sx={{ mr: "10px" }} />
              {productDetails.memory} GB
            </Typography> */}
              <Typography
                variant="h3"
                gutterBottom
                component="h3"
                sx={{ fontWeight: 700, letterSpacing: 2 }}
              >
                {productDetails.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {productDetails.description}
              </Typography>

              <Box
                component="div"
                sx={{
                  p: 2,
                  border: "1px dashed grey",
                  display: "flex",
                  alignItems: "center",
                  mt: "20px",
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: 700, letterSpacing: 2 }}
                >
                  {productDetails.price} с.
                </Typography>
              </Box>
              <Button
                onClick={(e) => addProductToCart()}
                variant="contained"
                color="primary"
                startIcon={<AddShoppingCartIcon />}
                fullWidth={true}
                sx={{ mt: "20px", height: "50px" }}
              >
                Add to cart
              </Button>
              <NavLink to={`/edit/${productDetails.id}`}>
                <Button>Edit</Button>
              </NavLink>
              <Alert
                severity="info"
                variant="outlined"
                color="primary"
                sx={{ fontWeight: 700, mt: "20px" }}
              >
                Phone number: +996 553 165 360
              </Alert>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </section>
  );
};

export default ProductDetails;
