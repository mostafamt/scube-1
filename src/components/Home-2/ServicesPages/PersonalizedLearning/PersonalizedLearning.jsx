import React from "react";
import Footer from "../../../Footer-1/Footer";
import Menu from "../../../Menu/Menu";
import Learning from "./Learning/Learning";
import Model from "./Model/Model";

import styles from "./personalizedLearning.module.scss";

const PersonalizedLearning = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Menu />
      <div className={styles["personalized-learning"]}>
        <div className="container">
          <h1>
            <span>ADAPTIVE</span> / PERSONALIZED <span>LEARNING</span>
          </h1>
          <p>
            Educational institutions cannot assign a human tutor to each
            student. A teacher cannot act like a private tutor for each student
            in the class. A human teacher cannot customize the learning contents
            to each individual student. SCube can.
          </p>
          <div
            style={{
              backgroundColor: "#f1f1f1",
              textAlign: "left",
              padding: ".5rem 2rem",
              display: "flex",
              gap: "1rem",
            }}
          >
            <img src="/assets/shift.jpg" alt="shift" />
            <div>
              <b>Paradigm Shift from Teaching to Learning</b>
              <br />
              <b> Learning Experiences Instead of Teaching</b>
              <br />
              <b>Personalized Learning Experiences</b>
            </div>
          </div>
          <Learning />
          <Model />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PersonalizedLearning;
