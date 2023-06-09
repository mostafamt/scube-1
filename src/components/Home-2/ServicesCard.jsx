import { TitleOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ icon, title, text }) => {
  return (
    <Box className="service-card">
      {/* <Box>{icon}</Box>
      <i className="TfiWorld"></i>
      <Typography variant="h5">{title}</Typography>
      <Typography textAlign={"justify"}>{text}</Typography>
      <div>
        <Link>More info</Link>
      </div> */}
    </Box>
  );
};

export default ServicesCard;
