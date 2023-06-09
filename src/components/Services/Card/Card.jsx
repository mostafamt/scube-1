import { LaptopMacOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import styles from "./card.module.scss";

const Card = ({ icon, title, text, to }) => {
  return (
    <div className={styles.card}>
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <div>
        <Link to={to}>
          <span>More info</span>
          <span>
            <KeyboardDoubleArrowRightIcon />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
