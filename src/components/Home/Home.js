import React, { useState } from "react";
import Why from "../Why/Why";
import Tabs from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import Model from "../Model/Model";
import Scube from "../Services/Scube";
export default function Home() {
  const [isActive, setIsActive] = useState({});
  return (
    <>
      <div>
        <Navbar isActive={isActive} setIsActive={setIsActive} />
        <Slider />
        <Scube />
        <Why />
        <Tabs />
        <Services />
        <Contact />
        <Footer isActive={isActive} setIsActive={setIsActive} />
      </div>
    </>
  );
}
