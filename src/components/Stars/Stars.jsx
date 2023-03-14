import React from "react";

import styles from "./students.module.scss";
import StudentCards from "./StudentCards/StudentCards";
import Message from "./Message/Message";

const Stars = (props) => {
  const condition = props.name === "students";
  return (
    <div
      className={`${styles.students}`}
      style={{
        backgroundColor: condition ? "#FFF" : "auto",
      }}
    >
      <div className={`container ${styles["students-box"]}`}>
        <h2>{props.title}</h2>
        <div className={styles["students-body"]}>
          <div>
            <StudentCards {...props} />
          </div>
          <div>
            <Message title={props.messageTitle} message={props.message} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stars;
