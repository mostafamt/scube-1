import React from "react";

import styles from "./cards.module.scss";

import TransformIcon from "@mui/icons-material/Transform";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import AdjustIcon from "@mui/icons-material/Adjust";
import BarChartIcon from "@mui/icons-material/BarChart";
import Card from "./Card/Card";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

const icons = [
  <TransformIcon />,
  <SchoolOutlined />,
  <AdjustIcon />,
  <BarChartIcon />,
];

const titles = [
  "Shifting from Teaching to Learning",
  "Adaptive and Personalized learning",
  "Designed with Students at the Center",
  "Analytics and Academic Advising",
];

const texts = [
  "The focus is on supporting students during studying and Learning, no more memorization nor rote learning, but rather understanding and fun leaning",
  "No more private teachers.  The system plays the role of the private teacher and presents lessons customized and adapted differently for each student",
  "Learning is becoming fun.  No more tears, but only joy and fun",
  "Parents & Techers will have a close eye to the student's progress, while the system will offer auto academic advising",
];

const Cards = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "120px",
    appendDots: (dots) => (
      <ul
        style={{
          listStyle: "none",
          marginTop: "3rem",
          right: 0,
          bottom: "-40px",
          display: "flex",
          gap: ".15rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {dots}
      </ul>
    ),
    customPaging: () => <div className={styles.grid_dot}></div>,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {icons.map((icon, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid red !important",
            }}
          >
            <div
              style={{
                height: "450px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card icon={icons[idx]} title={titles[idx]} text={texts[idx]} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Cards;
