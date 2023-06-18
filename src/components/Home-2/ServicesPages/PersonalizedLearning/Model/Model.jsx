import React from "react";
import styles from "./model.module.scss";

const Model = () => {
  return (
    <div className={styles.model}>
      <div>
        <div>
          <h2>Learner’s Model is Central</h2>
          <p>Personalizing and adapting delivery strategies will serve:</p>
          <ul>
            <li>Motivate at-risk students,</li>
            <li>Elevate high achievers</li>
            <li>Maximize each student’s potential.</li>
          </ul>
        </div>
        <img src="/assets/model-1.jpg" alt="model" />
      </div>
      <div>
        <img src="/assets/model-2.jpg" alt="model" />
        <div>
          <h2>All Activities should be adapted according to</h2>
          <p>The Student Model</p>
        </div>
      </div>
    </div>
  );
};

export default Model;
