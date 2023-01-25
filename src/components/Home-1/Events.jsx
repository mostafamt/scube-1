import { Box, Typography } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

const Events = () => {
  return (
    <Box className="events">
      <Container>
        <Box className="event">
          <Typography className="sub-header" textAlign={"left"}>
            Events
          </Typography>
          <ul className="list">
            <li>
              <Link className="item">
                <KeyboardDoubleArrowRightIcon />
                <Typography>International Studeis</Typography>
              </Link>
            </li>
            <li>
              <Link className="item">
                <KeyboardDoubleArrowRightIcon />
                <Typography>Model & Language Reaching</Typography>
              </Link>
            </li>
            <li>
              <Link className="item">
                <KeyboardDoubleArrowRightIcon />
                <Typography>State Testing Data</Typography>
              </Link>
            </li>
            <li>
              <Link className="item">
                <KeyboardDoubleArrowRightIcon />
                <Typography>Education Jobs</Typography>
              </Link>
            </li>
          </ul>
        </Box>
        <Box>
          <Typography className="sub-header" textAlign={"left"}>
            Announcements / News
          </Typography>
          <ul className="list">
            <li>
              <Link className="item">
                <KeyboardDoubleArrowRightIcon />
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Link>
            </li>
            <li>
              <Link className="item">
                <KeyboardDoubleArrowRightIcon />
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Link>
            </li>
          </ul>
        </Box>
      </Container>
    </Box>
  );
};

export default Events;
