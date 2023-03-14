import React from "react";
import Bar from "./Bar/Bar";

import styles from "./bars.module.scss";

const performanceProgressbarTitles = [
  "Increased Efficacy",
  "Increased Efficiency",
  "Increased Engagement",
  "Reduced Cost",
];
const values = [30, 35, 80, 92];
const colors = ["#fdc063", "#05c3cc", "#ff8b8b", "#ff904c"];

const Bars = () => {
  return (
    <div className={styles.bars}>
      <h2 className="sub-header">SCube's Target Performance Improvements</h2>
      <ul>
        {performanceProgressbarTitles.map((title, idx) => (
          <li key={idx}>
            <Bar title={title} value={values[idx]} pathColor={colors[idx]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bars;
