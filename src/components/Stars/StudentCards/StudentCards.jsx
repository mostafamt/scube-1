import React from "react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import { Grid, Pagination, Navigation } from "swiper";

import { IoPersonOutline } from "react-icons/io5";

import styles from "./studentCards.module.scss";
import Card from "./Card/Card";

const StudentCards = (props) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      // console.log("resized to: ", window.innerWidth, "x", window.innerHeight);
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  let slides = <></>;
  if (width < 600) {
    slides = (
      <>
        <SwiperSlide>
          <div className={styles["img-box"]}>
            <div className={styles["row"]}>
              <Card />
              <Card />
            </div>
            <div className={styles["row"]}>
              <Card />
              <Card />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["img-box"]}>
            <div className={styles["row"]}>
              <Card />
              <Card />
            </div>
            <div className={styles["row"]}>
              <Card />
              <Card />
            </div>
          </div>
        </SwiperSlide>
      </>
    );
  } else if (width <= 1000) {
    slides = (
      <>
        <SwiperSlide>
          <div className={styles["img-box"]}>
            <div className={styles["row"]}>
              <Card />
              <Card />
              <Card />
            </div>
            <div className={styles["row"]}>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["img-box"]}>
            <div className={styles["row"]}>
              <Card />
              <Card />
              <Card />
            </div>
            <div className={styles["row"]}>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </SwiperSlide>
      </>
    );
  } else {
    slides = (
      <>
        <SwiperSlide>
          <div className={styles["img-box"]}>
            <div className={styles["row"]}>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className={styles["row"]}>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["img-box"]}>
            <div className={styles["row"]}>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className={styles["row"]}>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </SwiperSlide>
      </>
    );
  }

  let comp =
    props.name === "students" ? (
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // clickable
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    ) : (
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{
          height: "20rem",
        }}
      >
        <SwiperSlide>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#555",
              color: "#fff",
              fontSize: "5rem",
              fontWeight: "100",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IoPersonOutline />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#555",
              color: "#fff",
              fontSize: "5rem",
              fontWeight: "100",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IoPersonOutline />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#555",
              color: "#fff",
              fontSize: "5rem",
              fontWeight: "100",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IoPersonOutline />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#555",
              color: "#fff",
              fontSize: "5rem",
              fontWeight: "100",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IoPersonOutline />
          </div>
        </SwiperSlide>
      </Swiper>
    );

  return comp;
};

export default StudentCards;
