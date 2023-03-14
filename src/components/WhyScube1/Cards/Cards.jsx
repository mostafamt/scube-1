import React from "react";

import styles from "./cards.module.scss";

import TransformIcon from "@mui/icons-material/Transform";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import AdjustIcon from "@mui/icons-material/Adjust";
import BarChartIcon from "@mui/icons-material/BarChart";
import Card from "./Card/Card";

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
  return (
    <ul className={styles.cards}>
      {icons.map((icon, idx) => (
        <li key={idx}>
          <Card icon={icons[idx]} title={titles[idx]} text={texts[idx]} />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
