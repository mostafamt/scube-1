import React from "react";

import styles from "./garden.module.scss";

const Garden = () => {
  return (
    <div className={styles.garden}>
      <img
        src="/assets/play_pencil_girl.png"
        alt="girl"
        className={styles.girl}
      />
      <img src="/assets/play_pencil_boy.png" alt="boy" className={styles.boy} />
      <img src="/assets/garden.png" alt="garden" />
    </div>
  );
};

export default Garden;
