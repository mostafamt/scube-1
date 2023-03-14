import React from "react";

import styles from "./slide.module.scss";

const Slide = ({ children, imgSrc }) => {
  return (
    <div
      className={styles.slide}
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
    >
      <div className={styles["slide__info"]}>{children}</div>
    </div>
  );
};

export default Slide;
