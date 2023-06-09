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
        <h1>Follow</h1>
      </div>

      <Footer />
    </div>
  );
};

export default Knowledge;
