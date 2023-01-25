import { Box, Typography } from "@mui/material";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";

const Progressbar = ({ title, value, pathColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
      }}
    >
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
      <Box className="progressbar-title">
        <Box
          className="improvement-bullet"
          sx={{
            backgroundColor: pathColor,
          }}
        ></Box>
        <Typography>{title}</Typography>
      </Box>
    </Box>
  );
};

export default Progressbar;
