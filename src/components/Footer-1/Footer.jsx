import React from "react";
import Contact from "./Contact/Contact";

import styles from "./footer.module.scss";
import SchoolInfo from "./SchoolInfo/SchoolInfo";
import ScubeInfo from "./ScubeInfo/ScubeInfo";
import Tail from "./Tail/Tail";

const Footer = (props) => {
  const [emailSent, setEmailSent] = React.useState(false);

  const onToggleEmailSent = () => {
    setEmailSent(!emailSent);
  };

  return (
    <footer className={styles.footer}>
      <h2 className="section-title">Get in Touch</h2>
      <div className="container">
        <ScubeInfo />
        <Contact schoolName={props.schoolName} to={props.to} />
        <SchoolInfo {...props} />
      </div>
      <Tail />
    </footer>
  );
};

export default Footer;
