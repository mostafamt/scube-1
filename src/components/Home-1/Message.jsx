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
                src="/assets/principal.jpg"
                alt="principal"
                width="300"
                height="auto"
              />
              <Box>
                <Typography align="justify" sx={{ marginBottom: "2rem" }}>
                  IPS ZNC School wishes you a very warm welcome to Our School.
                  Our objective is to deliver excellent education by exceptional
                  teachers in award winning facilities. We are making key
                  strides towards creating a school that makes a significant
                  difference to the community. The school hires the most
                  competent teachers, constructs creative facilities and smart
                  areas and labs, involves students with creative activities,
                  etc. The school's objective is to get the maximum learning
                  outcomes while enjoying studying and learning.
                </Typography>
                <Typography align="justify" sx={{ marginBottom: "2rem" }}>
                  We target building a healthy relationship between our school
                  and the students via offering our students with the best
                  learning environments inside and outside the school.
                  Therefore, the school hired several online learning management
                  and support systems; among them is the knowledge management
                  system, SCube's SILK MS. Our highly qualified teachers exert
                  their maximum with our students inside the class and at the
                  school, while SCube SILK MS and all other online systems
                  cooperate together to offer our students with a unique study
                  environment at home.
                </Typography>
                <Typography sx={{ marginBottom: "2rem" }}>
                  <strong>Mrs Suzan Zakaria</strong>, Principal
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
                    }}
                  >
                    Our vision is to initiate and lead the science of
                    Intelligent e- Learning and to pioneer and constantly grow
                    to become the lead exporter of innovative Intelligent
                    e-Learning technologies worldwide, and to become a leading
                    performer in the competitive global marketplace of
                    developing Intelligent solutions for the equitable access of
                    lifelong learners (LLL) including those vulnerable and
                    underserved.
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Our mission is to provide our customers with high quality
                    innovative intelligent solutions with maximized cost-
                    benefit and expedited ROI via improving the Efficiency,
                    Efficacy, and Engagement of the Learning systems. Our work
                    processes and products lifecycle seamlessly integrate
                    research and development for continuously exploring new
                    innovative improvements and ideas to guarantee continuous
                    evolution of the learning systems, while our products follow
                    the contemporary theories and paradigm shifts to guarantee a
                    top-level satisfaction of our end- users (the learners).
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
