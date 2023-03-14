import React from "react";

// import Message from "./Message";
// import Services from "./Services";
// import Students from "./Students";
// import Teachers from "./Teachers";
import Contact from "./Contact";
// import WhyScube from "../WhyScube/WhyScube";
import Menu from "../Menu/Menu";
// import Services from "./Services";
import Services from "../Services/Services";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { default as Footer1 } from "../Footer-1/Footer";
import Message from "../Message/Message";
import WhyScube from "../WhyScube1/WhyScube";
import Students from "../Students/Students";
import Teachers from "../Teachers/Teachers";
import Garden from "../Garden/Garden";

const Home = () => {
  return (
    <div>
      <Menu />
      <Header />
      <WhyScube />
      <Message />
      <Services />
      <Students />
      <Garden />
      <Teachers />
      {/* <Footer /> */}
      <Footer1 />

      {/* <Contact /> */}
    </div>
  );
};

export default Home;
