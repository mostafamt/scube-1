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
import emailjs from "@emailjs/browser";

const contactLabels = [
  "Full Name",
  "Email Address",
  "Phone Number",
  "Subject",
  "Your Message",
];
const contactInputNames = [
  "full_name",
  "email_address",
  "phone_number",
  "subject",
  "message",
];
const contactIcons = [
  <PersonOutline />,
  <MailOutline />,
  <PhoneAndroid />,
  <Subject />,
  <MessageOutlined />,
];

const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ceu5hkv",
        "template_a7so1vy",
        form.current,
        "_22UFYmA1mhZDVrQc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
                    info@scube-edutech.com
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <form ref={form} onSubmit={sendEmail}>
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
                        name={contactInputNames[idx]}
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

export default Contact;
