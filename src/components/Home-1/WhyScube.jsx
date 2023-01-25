import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import WhyScubeCard from "./WhyScubeCard";
import {
  WhyScubeIcons,
  WhyScubeHeaders,
  WhyScubeText,
  performanceProgressbarTitles,
  performanceProgressbarValues,
  performanceProgressbarColors,
} from "../constants/index";
import Progressbar from "./Progressbar";

const WhyScube = () => {
  return (
    <section className="why-scube" id="why-scube">
      <div className="container">
        <Typography variant="h2" className="section-title">
          Why Scube
        </Typography>

        <Grid container spacing={8}>
          <Grid item xs={8}>
            <Grid container spacing={8}>
              {WhyScubeHeaders.map((header, idx) => (
                <Grid key={idx} item xl={3} lg={6} md={6} xs={12}>
                  <WhyScubeCard
                    key={idx}
                    icon={WhyScubeIcons[idx]}
                    header={header}
                    text={WhyScubeText[idx]}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography className="sub-header">
                SCube's Target Performance Improvements
              </Typography>
              <Box>
                <Grid container rowSpacing={4}>
                  {performanceProgressbarTitles.map((title, idx) => (
                    <Grid key={idx} item xs={6}>
                      <Progressbar
                        title={title}
                        value={performanceProgressbarValues[idx]}
                        pathColor={performanceProgressbarColors[idx]}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default WhyScube;
