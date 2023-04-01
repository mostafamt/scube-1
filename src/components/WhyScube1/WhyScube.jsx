import React from "react";
import Bars from "./Bars/Bars";
import Cards from "./Cards/Cards";

import styles from "./whyScube.module.scss";

const WhyScube = () => {
  return (
    <div className={`container  ${styles["why-scube"]}`}>
      <h2 className="section-title">Why Scube</h2>
      <div className={styles["why-scube__content"]}>
        <div>
          <Cards />
        </div>
        <div>
          <Bars />
        </div>
      </div>
    </div>
  );
};

export default WhyScube;
