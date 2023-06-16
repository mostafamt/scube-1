import React from "react";
import Slider from "react-slick";
import { data } from "./data";
import Card from "../../Services/Card/Card";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import styles from "./newServices.module.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  // autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,

  responsive: [
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1299,
      settings: {
        slidesToShow: 2.6,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2.25,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2.75,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const events = ["Under construction"];

const news = ["Under construction"];

const NewServices = () => {
  return (
    <div className={`container ${styles["new-services"]}`}>
      <h2>
        WHAT <span>SERVICES</span>
        <br />
        <span>SCUBE</span> PROVIDES
      </h2>

      <div>
        <Slider {...settings}>
          {data.serviceCardIcons.map((icon, idx) => (
            <div>
              <Card
                icon={icon}
                title={data?.serviceCardHeaders[idx]}
                text={data?.serviceCardTexts[idx]}
                to={data?.tos[idx]}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.sidebar}>
        <div className={styles.events}>
          <h2>events</h2>
          <ul>
            {events.map((e, idx) => (
              <li key={idx}>
                <KeyboardDoubleArrowRightIcon />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.news}>
          <h2>ANNOUNCEMENTS / NEWS</h2>
          <ul>
            {news.map((e, idx) => (
              <li key={idx}>
                <KeyboardDoubleArrowRightIcon />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewServices;
