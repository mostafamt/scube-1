import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const WhyScubeCard = ({ icon, header, text }) => {
  return (
    <Box className="why-scube-card">
      {icon}
      <Typography variant="h4" className="why-scube-card-header">
        {header}
      </Typography>
      <Typography textAlign={"justify"}>{text}</Typography>
    </Box>
  );
};

export default WhyScubeCard;
