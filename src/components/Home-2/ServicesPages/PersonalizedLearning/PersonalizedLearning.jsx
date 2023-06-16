import React from "react";
import Footer from "../../../Footer-1/Footer";
import Menu from "../../../Menu/Menu";
import Learning from "./Learning/Learning";

const PersonalizedLearning = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Menu />
      <div
        style={{
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
          }}
        >
          <h1>ADAPTIVE/PERSONALIZED LEARNING</h1>
          <p>
            Educational institutions cannot assign a human tutor to each
            student. A teacher cannot act like a private tutor for each student
            in the class. A human teacher cannot customize the learning contents
            to each individual student. SCube can.
          </p>
          <Learning />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default PersonalizedLearning;
