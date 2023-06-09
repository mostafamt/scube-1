import React from "react";
import Menu from "../../../Menu/Menu";
import Footer1 from "../../../Footer-1/Footer";

const FunLearning = () => {
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
        <h1>Fun Learning</h1>
      </div>

      <Footer1 />
    </div>
  );
};

export default FunLearning;
