import React from "react";
import Bars from "./Bars/Bars";
import Cards from "./Cards/Cards";

import TransformIcon from "@mui/icons-material/Transform";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import AdjustIcon from "@mui/icons-material/Adjust";
import BarChartIcon from "@mui/icons-material/BarChart";

import styles from "./whyScube.module.scss";

const cards = [
  {
    icon: <TransformIcon />,
    title: "Shifting from Teaching to Learning",
    text: "The focus is on supporting students during studying and Learning, no more memorization nor rote learning, but rather understanding and fun leaning",
    to: "/shifting",
  },
  {
    icon: <SchoolOutlined />,
    title: "Adaptive and Personalized learning",
    text: "No more private teachers.  The system plays the role of the private teacher and presents lessons customized and adapted differently for each student",
    to: "/adaptive",
  },
  {
    icon: <AdjustIcon />,
    title: "Designed with Students at the Center",
    text: "Learning is becoming fun. No more tears, but only joy and fun",
    to: "/designed",
  },
  {
    icon: <BarChartIcon />,
    title: "Analytics and Academic Advising",
    text: "Parents & Techers will have a close eye to the student's progress, while the system will offer auto academic advising",
    to: "/analytics",
  },
];

const WhyScube = () => {
  return (
    <div className={`container  ${styles["why-scube"]}`}>
      <h2>
        Why <span>Scube</span>
      </h2>
      <div className={styles["why-scube__content"]}>
        <div>
          <Cards cards={cards} />
        </div>
        <div>
          <Bars />
        </div>
      </div>
    </div>
  );
};

export default WhyScube;
