import { Box, Typography } from "@mui/material";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./progressbar.module.css";

const Progressbar = ({ title, value, pathColor }) => {
  return (
    <div className={styles.progressbar}>
      <div style={{ width: "8rem" }}>
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
      <Box className={styles.progressbarTitle}>
        <Box
          className={styles.improvementBullet}
          sx={{
            backgroundColor: pathColor + "!important",
          }}
        ></Box>
        <Typography>{title}</Typography>
      </Box>
    </div>
  );
};

export default Progressbar;
