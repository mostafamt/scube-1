import React from 'react';
import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material';

import styles from './message.module.scss';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Message = ({ message }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { img, messages, signature, vision, mission } = message;

  return (
    <div className={styles.background}>
      <div className={`container ${styles.message}`}>
        <h2 className="section-title">Our Message</h2>

        <div className={styles['message-body']}>
          <div>
            <img src={img} alt="" />
            <div>
              {messages.map((message, idx) => (
                <p key={idx}>{message}</p>
              ))}
              {signature && (
                <p>
                  {signature.gender} <strong>{signature.name}</strong> ,
                  Principal
                </p>
              )}
            </div>
          </div>
          <div className={styles.story}>
            <h2>OUR STORY</h2>
            <p>Our team comes with the experience and knowledge</p>
            <div className={styles.tabs}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
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
                  textAlign: 'justify',
                  height: '6rem',
                }}
              >
                <Typography textAlign={'justify'}>{vision}</Typography>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography textAlign={'justify'}>{mission}</Typography>
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
