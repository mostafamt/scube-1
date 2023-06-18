import React from "react";
import Footer from "../../../Footer-1/Footer";
import Menu from "../../../Menu/Menu";

const Knowledge = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Menu />
      <div
        style={{
          height: "50vh",
          textAlign: "center",
        }}
      >
        <h1>Knowledge Transfer Platform</h1>
        <p>
          The system will automatically assess your learning achievement and
          satisfaction of lessons'goals. Analytics of your study style will give
          the teacher and theparent a report on your status quo early enough.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Knowledge;
