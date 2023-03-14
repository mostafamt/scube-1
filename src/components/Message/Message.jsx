import React from "react";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";

import styles from "./message.module.scss";

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

const Message = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.background}>
      <div className={`container ${styles.message}`}>
        <h2>Our Message</h2>

        <div className={styles["message-body"]}>
          <div>
            <img src="/assets/principal-1.jpg" alt="" />
            <div>
              <p>
                International Public Schools started as an educational project
                and its goal is for our children to get the distinguished
                education they deserve at an affordable cost.
              </p>
              <p>
                Its goal is to build a person who is able to keep pace with
                development and is open to all cultures in the world while
                preserving the Egyptian identity and belonging to the land and
                soil of this country.
              </p>
              <p>
                Our goal is a generation that faces the challenges and
                successive developments in a world where those who do not evolve
                and adapt to the developments of life are extinct.
              </p>
              <p>
                Our goal is a generation that faces the challenges and
                successive developments in a world where those who do not evolve
                and adapt to the developments of life are extinct.
              </p>
              <p>
                To be a driving force for the advancement of our beloved
                country.
              </p>
              God save Egypt and save its people.🇪🇬
              <p>
                Mr <strong>Muhammad Saad Al-Wakil</strong> , Principal
              </p>
            </div>
          </div>
          <div className={styles.story}>
            <h2>OUR STORY</h2>
            <p>Our team comes with the experience and knowledge</p>
            <div className={styles.tabs}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
