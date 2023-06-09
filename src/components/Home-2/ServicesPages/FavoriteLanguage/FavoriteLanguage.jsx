import React from "react";
import Footer from "../../../Footer-1/Footer";
import Menu from "../../../Menu/Menu";

const FavoriteLanguage = () => {
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
        <h1>Favorite Language</h1>
      </div>

      <Footer />
    </div>
  );
};

export default FavoriteLanguage;
