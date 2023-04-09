import React from "react";

import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  MailOutlineOutlined,
} from "@mui/icons-material";

import styles from "./scubeInfo.module.scss";

const ScubeInfo = () => {
  return (
    <div className={styles.scubeInfo}>
      <div className={styles["img-box"]}>
        <img src="/assets/scube.png" alt="logo" />
      </div>
      <p className="justify">
        The provider of research-based innovative intelligent solutions for
        Asynchronous e-Learning
      </p>
      <div className="scube-info">
        <p>Contact Information</p>
        <ul className={`list ${styles["scubeInfo__list"]} `}>
          <li>
            <LocationOnOutlined />
            6th of October City, Giza , Egypt
          </li>
          <li>
            <LocalPhoneOutlined />
            +20 122 318 7514
          </li>
          <li>
            <MailOutlineOutlined />
            info@scube-edutech.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScubeInfo;
