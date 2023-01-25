import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Header from "./Header";
import WhyScube from "./WhyScube";
import Message from "./Message";
import Services from "./Services";
import Students from "./Students";
import Teachers from "./Teachers";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <ResponsiveAppBar />
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
