import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  MailOutline,
  MailOutlineOutlined,
  MessageOutlined,
  PersonOutline,
  PhoneAndroid,
  Subject,
} from "@mui/icons-material";

const contactLabels = [
  "Full Name",
  "Email Address",
  "Phone Number",
  "Subject",
  "Your Message",
];
const contactIcons = [
  <PersonOutline />,
  <MailOutline />,
  <PhoneAndroid />,
  <Subject />,
  <MessageOutlined />,
];

const Contact = () => {
  return (
    <footer className="contact" id="contact">
      {/* <Container maxWidth="xl"> */}
      {/* <img src="/assets/footer-bg-1.png" alt="footer" /> */}
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
                    sales@scube-edutech.com
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <form>
              <Grid container spacing={4}>
                {contactLabels.map((label, idx) => (
                  <Grid key={label} item xs={label === "Your Message" ? 12 : 6}>
                    <FormControl variant="standard" className="form-control">
                      <InputLabel
                        htmlFor="input-with-icon-adornment"
                        sx={{ color: "#fff" }}
                      >
                        {label}
                      </InputLabel>
                      <Input
                        id="input-with-icon-adornment"
                        multiline={label === "Your Message" ? true : false}
                        rows={label === "Your Message" ? 3 : null}
                        startAdornment={
                          <InputAdornment position="start">
                            {contactIcons[idx]}
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                ))}
                <Grid item xs={12} textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#fff",
                      color: "rgb(25, 118, 210)",

                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={3} className="school-info">
            <img src="/assets/school-logo.png" alt="school-logo" />
            <ul className="list">
              <li>
                <LocationOnOutlined />
                4000 Residences of the Armed Forces Officers - in front of Maj.
                Gen. Maged Saleh Mosque - Zahraa, Nasr City - Cairo
              </li>
              <li>
                <LocalPhoneOutlined />
                02 23835443 - 010 2412 1784
              </li>
              <li>
                <MailOutlineOutlined />
                ips.zahraanasrcity@gmail.com
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

export default Contact;
