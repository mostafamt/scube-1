import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import {
  WhyScubeIcons,
  WhyScubeHeaders,
  WhyScubeText,
  performanceProgressbarTitles,
  performanceProgressbarValues,
  performanceProgressbarColors,
} from "../constants/index";
import Progressbar from "./Progressbar/Progressbar";
import WhyScubeCard from "./Card/WhyScubeCard";

import styles from "./whyScube.module.css";

const WhyScube = () => {
  return (
    <section className={styles.whyScube} id="why-scube">
      <div className="container">
        <Typography variant="h2" className="section-title">
          Why Scube
        </Typography>

        <div className={styles.whyScubeContent}>
          <div className={styles.whyScubeContentCards}>
            {WhyScubeHeaders.map((header, idx) => (
              <WhyScubeCard
                key={idx}
                icon={WhyScubeIcons[idx]}
                header={header}
                text={WhyScubeText[idx]}
              />
            ))}
          </div>
          <div className={styles.whyScubeContentBars}>
            <div className={styles.performaceHeader}>
              <Typography className={`sub-header`}>
                SCube's Target Performance Improvements
              </Typography>
            </div>
            <div className={styles.bars}>
              {performanceProgressbarTitles.map((title, idx) => (
                <Progressbar
                  key={idx}
                  title={title}
                  value={performanceProgressbarValues[idx]}
                  pathColor={performanceProgressbarColors[idx]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyScube;
