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
          textAlign: "center",
        }}
      >
        <h1>SMART INTERACTIVE iBOOK</h1>
        <p>
          It is not a PDF book, it is a real interactive book. Readers can
          interact with the Smart Objects, the Interactive Objects and the
          dictionary entries and the iBook-generated games. Studying and
          navigation in the book is made easy via the multi-purpose tabs, and
          many more services.
        </p>
        <video width="600" height="450" controls>
          <source
            src="https://res.cloudinary.com/dapspj9n8/video/upload/v1686629940/The-Smart-Interactive-iBook-m_pzhe0l.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <Footer />
    </div>
  );
};

export default FavoriteLanguage;
