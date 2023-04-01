import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./menu.module.scss";

// import RiMenu2Line from "react-icons";
import { RiMenu2Line } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";

// CiLogin

import Drawer from "../Drawer/Drawer";

const items = ["scube", "why scube", "our message", "services", "contact"];
const paths = ["header", "why-scube", "our-message", "services", "contact"];

const Menu = ({ logo }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => setOpenDrawer((prevState) => !prevState);

  const navigate = useNavigate();

  const handleClickLink = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        items={items}
        paths={paths}
        clickLink={handleClickLink}
      />
      <div className={styles["menu-box"]}>
        <div className="container">
          <div className={styles["menu"]}>
            <button className={styles["sandwich"]} onClick={toggleDrawer}>
              <RiMenu2Line />
            </button>
            <img src="/assets/scube.png" alt="logo" />
            <ul>
              {items.map((el, idx) => (
                <li key={idx}>
                  <Link onClick={() => handleClickLink(paths[idx])}>{el}</Link>
                </li>
              ))}
            </ul>
            <img src={logo} alt="mansoura-logo" className={styles["man-img"]} />
            <div className={styles.loginBox}>
              <button onClick={() => navigate("/login")}>
                <span>Login </span>
                <FiLogIn />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
