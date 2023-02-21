import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import styles from "./whyScubeCard.module.css";

const WhyScubeCard = ({ icon, header, text }) => {
  return (
    <Box className={styles.whyScubeCard}>
      {icon}
      <Typography variant="h4" className={styles.whyScubeCardHeader}>
        {header}
      </Typography>
      <Typography textAlign={"justify"}>{text}</Typography>
    </Box>
  );
};

export default WhyScubeCard;
