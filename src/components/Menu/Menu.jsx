import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./menu.module.scss";

const items = ["scube", "why scube", "our message", "services", "contact"];
const paths = ["header", "why-scube", "our-message", "services", "contact"];

const Menu = () => {
  const navigate = useNavigate();

  const handleClickLink = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.menu}>
      <img src="/assets/scube.png" alt="logo" />
      <ul>
        {items.map((el, idx) => (
          <li key={idx}>
            <Link onClick={() => handleClickLink(paths[idx])}>{el}</Link>
          </li>
        ))}
      </ul>
      <img src="/assets/mansoura-logo.png" alt="mansoura-logo" />
      <div className={styles.loginBox}>
        <button className="my-button" onClick={() => navigate("/login")}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Menu;
