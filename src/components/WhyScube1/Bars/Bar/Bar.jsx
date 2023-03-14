import React from "react";

import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./bar.module.scss";

const Bar = ({ title, value, pathColor }) => {
  return (
    <div className={styles.progressbar}>
      <div className={styles.circular}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? value : 0;
            return (
              <div>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  strokeWidth={8}
                  styles={buildStyles({
                    pathColor: `${pathColor}`,
                    textColor: "#666",
                    pathTransitionDuration: 2,
                  })}
                />
              </div>
            );
          }}
        </VisibilitySensor>
      </div>
      <div className={styles.progressbarTitle}>
        <div
          className={styles.improvementBullet}
          style={{
            backgroundColor: `${pathColor}`,
          }}
        ></div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Bar;
