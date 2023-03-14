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

const Header = () => {
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
        {SliderImagesMansoura.map((sliderImage, idx) => (
          <SwiperSlide key={idx}>
            <Slide imgSrc={sliderImage}>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
                textAlign="center"
              >
                {SliderHeadersMansoura[idx]}
              </Typography>
              <Typography sx={{ color: "#fff" }} textAlign="center">
                {SliderTextMansoura[idx]}
              </Typography>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Header;
