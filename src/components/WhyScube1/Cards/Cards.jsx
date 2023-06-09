import React from 'react';

import styles from './cards.module.scss';

import TransformIcon from '@mui/icons-material/Transform';
import SchoolOutlined from '@mui/icons-material/SchoolOutlined';
import AdjustIcon from '@mui/icons-material/Adjust';
import BarChartIcon from '@mui/icons-material/BarChart';
import Card from './Card/Card';
import Slider from 'react-slick';

import './slick.css';
import './slick-theme.css';
import { Link } from 'react-router-dom';

const Cards = (props) => {
  const { cards } = props;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '120px',
    appendDots: (dots) => (
      <ul
        style={{
          listStyle: 'none',
          marginTop: '3rem',
          right: 0,
          bottom: '-40px',
          display: 'flex',
          gap: '.15rem',
          justifyContent: 'center',
          alignItems: 'center',
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
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1000,
          swiper: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1000,
          swiper: true,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1000,
          swiper: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {cards.map((card, idx) => {
          if (card?.to) {
            return (
              <div key={idx}>
                <Link to={card?.to} className={styles['card-wrapper']}>
                  <Card icon={card.icon} title={card.title} text={card.text} />
                </Link>
              </div>
            );
          } else {
            return (
              <div key={idx}>
                <div className={styles['card-wrapper']}>
                  <Card icon={card.icon} title={card.title} text={card.text} />
                </div>
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
};

export default Cards;
