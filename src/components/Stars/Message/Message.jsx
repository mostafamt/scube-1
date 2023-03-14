import React from "react";

import styles from "./message.module.scss";

const Message = (props) => {
  return (
    <div className={styles.message}>
      <h4 className={styles["sub-header"]}>{props.title}</h4>
      <p>{props.message}</p>
    </div>
  );
};

export default Message;
