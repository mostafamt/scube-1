import React from "react";
import styles from "./card.module.scss";

const Card = ({ icon, title, text }) => {
  return (
    <div className={styles.card}>
      <div>{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
