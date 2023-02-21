import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Header from "./Header";

import Message from "./Message";
import Services from "./Services";
import Students from "./Students";
import Teachers from "./Teachers";
import Contact from "./Contact";
import WhyScube from "../WhyScube/WhyScube";
import Menu from "../Menu/Menu";

const Home = () => {
  return (
    <div>
      {/* <ResponsiveAppBar /> */}
      <Menu />
      <Header />
      <WhyScube />
      <Message />
      <Services />
      <Students />
      <Teachers />
      <Contact />
    </div>
  );
};

export default Home;
