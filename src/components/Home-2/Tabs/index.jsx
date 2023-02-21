import React from "react";

import style from "./style.module.css";

const TRANSLATE_VALUE = -26.5;

const Index = () => {
  const [translateValue, setTranslateValue] = React.useState(0);
  const [activePanel, setActivePanel] = React.useState(0);

  const handleMissionClick = () => {
    setTranslateValue(TRANSLATE_VALUE);
    setActivePanel(1);
  };

  const handleVisionClick = () => {
    setTranslateValue(0);
    setActivePanel(0);
  };

  return (
    <div className={style.tabs}>
      <div className={style.buttons}>
        <button
          onClick={handleVisionClick}
          className={activePanel === 0 ? style.active : null}
          // className={style.active}
        >
          our vision
        </button>
        <button
          onClick={handleMissionClick}
          className={activePanel === 1 ? style.active : null}
        >
          our mission
        </button>
      </div>
      <ul
        className={style.panels}
        style={{
          transform: `translateX(${translateValue}rem)`,
        }}
      >
        <li className={style.panel}>
          <p>
            Our vision is to initiate and lead the science of Intelligent e-
            Learning and to pioneer and constantly grow to become the lead
            exporter of innovative Intelligent e-Learning technologies
            worldwide, and to become a leading performer in the competitive
            global marketplace of developing Intelligent solutions for the
            equitable access of lifelong learners (LLL) including those
            vulnerable and underserved.
          </p>
        </li>
        <li className={style.panel}>
          <p>
            Our mission is to provide our customers with high quality innovative
            intelligent solutions with maximized cost- benefit and expedited ROI
            via improving the Efficiency, Efficacy, and Engagement of the
            Learning systems. Our work processes and products lifecycle
            seamlessly integrate research and development for continuously
            exploring new innovative improvements and ideas to guarantee
            continuous evolution of the learning systems, while our products
            follow the contemporary theories and paradigm shifts to guarantee a
            top-level satisfaction of our end- users (the learners).
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Index;
