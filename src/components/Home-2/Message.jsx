import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

import MTabs from "./Tabs";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Story = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="story" id="our-message">
      {/* <div className="bg-video">
        <video class="video" id="video" autoplay muted loop>
          <source src="/assets/video.mp4" type="video/mp4" />
          <source src="/assets/video.webm" type="video/webm" />
          Your browser is not supported
        </video>
      </div> */}

      <img src="/assets/arrow.png" alt="arrow" className="arrow-img" />

      {/* <Container> */}
      <div className="container">
        <div className="container">
          <Typography variant="h2" className="section-title">
            Our Message
          </Typography>
          <Grid container columnSpacing={8} alignItems="center">
            <Grid
              item
              xs={8}
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <img
                src="/assets/principal-1.jpg"
                alt="principal"
                width="300"
                height="auto"
              />
              <Box>
                <Typography align="justify" sx={{ marginBottom: "0.4rem" }}>
                  International Public Schools started as an educational project
                  and its goal is for our children to get the distinguished
                  education they deserve at an affordable cost.
                </Typography>
                <Typography align="justify" sx={{ marginBottom: "0.4rem" }}>
                  Its goal is to build a person who is able to keep pace with
                  development and is open to all cultures in the world while
                  preserving the Egyptian identity and belonging to the land and
                  soil of this country.
                </Typography>
                <Typography align="justify" sx={{ marginBottom: "0.4rem" }}>
                  Our goal is a generation that faces the challenges and
                  successive developments in a world where those who do not
                  evolve and adapt to the developments of life are extinct.
                </Typography>
                <Typography align="justify" sx={{ marginBottom: "0.4rem" }}>
                  Our goal is a generation that faces the challenges and
                  successive developments in a world where those who do not
                  evolve and adapt to the developments of life are extinct.
                </Typography>
                <Typography align="justify" sx={{ marginBottom: "0.4rem" }}>
                  To be a driving force for the advancement of our beloved
                  country.
                </Typography>
                <Typography align="justify" sx={{ marginBottom: "0.4rem" }}>
                  God save Egypt and save its people.
                </Typography>

                <Typography sx={{ marginBottom: "2rem" }}>
                  <strong>Mr Muhammad Saad Al-Wakil</strong>, Principal
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box className="story-right">
                <Typography className="sub-header">Our Story</Typography>
                <Typography sx={{ margin: "1rem 0" }}>
                  Our team comes with the experience and knowledge
                </Typography>

                {/* <MTabs /> */}
                <Box>
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                    }}
                  >
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Our Vision" {...a11yProps(0)} />
                      <Tab label="Our Mission" {...a11yProps(1)} />
                    </Tabs>
                  </Box>
                  <TabPanel
                    value={value}
                    index={0}
                    sx={{
                      padding: 0,
                      margin: 0,
                      textAlign: "justify",
                      height: "6rem",
                    }}
                  >
                    <Typography textAlign={"justify"}>
                      To empower students to be future leaders to serve the
                      community and keep the Egyptian identity.
                    </Typography>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Typography textAlign={"justify"}>
                      We inspire and nurture students to be creative, critical
                      thinkers and decision makers. Children will rise to be the
                      challenge of life responsibly, confidently and ethically.
                    </Typography>
                  </TabPanel>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
        {/* </Container> */}
      </div>
    </section>
  );
};

export default Story;
