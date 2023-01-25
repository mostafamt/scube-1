import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Typography } from "@mui/material";
import HeaderSlide from "./HeaderSlide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { SliderImages, SliderHeaders, SliderText } from "../constants";

const Header = () => {
  return (
    <section id="header">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {SliderImages.map((sliderImage, idx) => (
          <SwiperSlide key={idx}>
            <HeaderSlide imgSrc={sliderImage}>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                }}
                textAlign="center"
              >
                {SliderHeaders[idx]}
              </Typography>
              <Typography sx={{ color: "#fff" }} textAlign="center">
                {SliderText[idx]}
              </Typography>
            </HeaderSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Header;
