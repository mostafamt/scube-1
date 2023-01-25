import { Box } from "@mui/material";
import React from "react";

const HeaderSlide = ({ children, imgSrc }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "80vh",
        color: "black",
        // backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${imgSrc})`,
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        position: "relataive",
        borderBottom: "2px solid #555",
        // top: 0,
        // left: 0,
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          width: "100%",
          margin: "0 auto",
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: "1rem",
          bottom: "0",
          left: "0",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default HeaderSlide;
