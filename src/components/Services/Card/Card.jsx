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
      <Link to={to}>
        Read more <KeyboardDoubleArrowRightIcon />
      </Link>
    </div>
  );
};

export default Card;
