import React from "react";

import { Box, Button, Grid, Typography } from "@mui/material";
import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  MailOutlineOutlined,
} from "@mui/icons-material";
import Form from "./Form/Form";

import "./footer.css";

const Footer = () => {
  const [emailSent, setEmailSent] = React.useState(false);

  const onToggleEmailSent = () => {
    setEmailSent(!emailSent);
  };

  return (
    <footer className="contact" id="contact">
      <div className="container">
        <Typography variant="h2" className="section-title">
          Get in Touch
        </Typography>

        <img
          src="/assets/cloud.png"
          alt="cloud"
          className="contact cloud-img"
        />

        <img
          src="/assets/cloud-1.png"
          alt="cloud"
          className="contact cloud-img-1"
        />

        <img src="/assets/sun.png" alt="cloud" className="contact sun-img" />

        <img
          src="/assets/pencil_boy.png"
          alt="pencil_boy"
          className="contact pencil-boy"
        />
        <img
          src="/assets/pencil_girl.png"
          alt="pencil_boy"
          className="contact pencil-girl"
        />

        <Grid container spacing={{ xl: 16, lg: 8 }} className="grid">
          <Grid item xs={3}>
            <Box className="contact-scube">
              <img src="/assets/scube.png" alt="logo" />
              <Typography className="justify">
                The provider of research-based innovative intelligent solutions
                for Asynchronous e-Learning
              </Typography>
              <Box className="scube-info">
                <Typography>Contact Information</Typography>
                <ul className="list">
                  <li>
                    <LocationOnOutlined />
                    6th of October City, Giza , Egypt
                  </li>
                  <li>
                    <LocalPhoneOutlined />
                    +20 122 318 7514
                  </li>
                  <li>
                    <MailOutlineOutlined />
                    info@scube-edutech.com
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              alignSelf: emailSent ? "center" : "flex-end",
            }}
          >
            {!emailSent ? (
              <Form toggleEmailSent={onToggleEmailSent} />
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>Your message has sent Successfully</p>
                <Button variant="contained" onClick={onToggleEmailSent}>
                  Send another message
                </Button>
              </div>
            )}
          </Grid>
          <Grid item xs={3} className="school-info">
            <img src="/assets/mansoura-logo.png" alt="school-logo" />
            <ul className="list">
              <li>
                <LocationOnOutlined />
                Mansoura Alnakhla street - school compound - behind Dakahliya
                Directorate of Education
              </li>
              <li>
                <LocalPhoneOutlined />
                050 2218999
              </li>
              <li>
                <MailOutlineOutlined />
                ms_elwakil2003@yahoo.com
              </li>
            </ul>
          </Grid>
        </Grid>
        {/* </Container> */}
      </div>
      <Box className="copyright">
        <Typography>
          Copyright &copy; 2023 SCube for Education Technology. All Rights
          Reserved
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
