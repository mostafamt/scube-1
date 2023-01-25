import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

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
      <img src="/assets/arrow.png" alt="arrow" className="arrow-img" />

      {/* <Container> */}
      <div className="container">
        <Typography variant="h2" className="section-title">
          Our Message
        </Typography>
        <Grid container columnSpacing={8} style={{}}>
          <Grid
            item
            xs={8}
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <img src="/assets/principal.jpg" alt="principal" height="400" />
            <Box>
              {/* <Typography
                variant="h4"
                sx={{
                  marginBottom: "2rem",

                  // "& ::after": {
                  //   content: "",
                  //   display: "block",
                  //   backgroundColor: "red",
                  //   width: "100px",
                  //   height: "5px",
                  // },
                }}
              >
                Principal's Welcome
              </Typography> */}
              <Typography align="justify" sx={{ marginBottom: "2rem" }}>
                As Principal I wish you a very warm welcome to Our School! We
                are at the heart of the Cairo community and in 2010 we have
                succeeded in providing local families an excellent education
                delivered by exceptional teachers in award winning facilities.
              </Typography>
              <Typography align="justify" sx={{ marginBottom: "2rem" }}>
                Judged as a good school by Ofsted our achievements can be seen
                through rapid improvements in education. We are also making key
                strides towards creating an school which makes a significant
                difference to the community we serve and that provides
                opportunities for all our pupils and students.
              </Typography>
              <Typography sx={{ marginBottom: "2rem" }}>
                <strong>Mrs Joanna McQuaid</strong>, Principal
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="story-right">
              <Typography className="sub-header">Our Story</Typography>
              <Typography sx={{ margin: "1rem 0" }}>
                Our team comes with the experience and knowledge
              </Typography>
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
                  }}
                >
                  Our vision is to initiate and lead the science of Intelligent
                  e- Learning and to pioneer and constantly grow to become the
                  lead exporter of innovative Intelligent e-Learning
                  technologies worldwide, and to become a leading performer in
                  the competitive global marketplace of developing Intelligent
                  solutions for the equitable access of lifelong learners (LLL)
                  including those vulnerable and underserved.
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Our mission is to provide our customers with high quality
                  innovative intelligent solutions with maximized cost- benefit
                  and expedited ROI via improving the Efficiency, Efficacy, and
                  Engagement of the Learning systems. Our work processes and
                  products lifecycle seamlessly integrate research and
                  development for continuously exploring new innovative
                  improvements and ideas to guarantee continuous evolution of
                  the learning systems, while our products follow the
                  contemporary theories and paradigm shifts to guarantee a
                  top-level satisfaction of our end- users (the learners).
                </TabPanel>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* </Container> */}
      </div>
    </section>
  );
};

export default Story;
