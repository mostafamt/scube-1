import React from "react";

import {
  LocalPhoneOutlined,
  LocationOnOutlined,
  MailOutlineOutlined,
} from "@mui/icons-material";

import styles from "./schoolInfo.module.scss";

const SchoolInfo = () => {
  return (
    <div className={styles.schoolInfo}>
      <img src="/assets/mansoura-logo.png" alt="school-logo" />
      <ul className="list">
        <li>
          <LocationOnOutlined />
          Mansoura Alnakhla street - school compound - behind Dakahliya
          Directorate of Education
        </li>
        <li>
          <LocalPhoneOutlined />
          050 2218999
        </li>
        <li>
          <MailOutlineOutlined />
          ms_elwakil2003@yahoo.com
        </li>
      </ul>
    </div>
  );
};

export default SchoolInfo;
