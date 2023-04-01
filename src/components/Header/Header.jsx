import React from "react";

import Slide from "./Slide/Slide";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import {
  SliderImages,
  SliderHeaders,
  SliderText,
  SliderImagesMansoura,
  SliderHeadersMansoura,
  SliderTextMansoura,
} from "../constants";

const Header = ({ slides }) => {
  return (
    <section id="header">
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map(({ title, description, img }, idx) => (
          <SwiperSlide key={idx}>
            <Slide imgSrc={img}>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
                textAlign="center"
              >
                {title}
              </Typography>
              <Typography sx={{ color: "#fff" }} textAlign="center">
                {description}
              </Typography>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Header;
