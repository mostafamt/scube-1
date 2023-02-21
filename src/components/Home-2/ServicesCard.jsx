import { TitleOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const ServicesCard = ({ icon, title, text }) => {
  return (
    <Box className="service-card">
      <Box>{icon}</Box>

      <i className="TfiWorld"></i>
      <Typography variant="h5">{title}</Typography>
      <Typography textAlign={"justify"}>{text}</Typography>
    </Box>
  );
};

export default ServicesCard;
