import React from "react";
import { Link } from "react-router-dom";

import styles from "./drawer.module.scss";

import { MdClose } from "react-icons/md";

const Drawer = ({ open, items, paths, clickLink }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  React.useEffect(() => {
    toggleDrawer();
  }, [open]);

  const toggleDrawer = () => setOpenDrawer((prevState) => !prevState);

  const onClickLinkHandler = (path) => {
    toggleDrawer();
    clickLink(path);
  };

  return (
    <>
      {openDrawer && (
        <div className={styles.backdrop} onClick={toggleDrawer}></div>
      )}
      <div
        className={styles.drawer}
        style={{
          transform: openDrawer ? "translateX(0%)" : "translateX(-100%)",
        }}
      >
        <div className={styles["close-btn-box"]}>
          <button onClick={toggleDrawer}>
            <MdClose />
          </button>
        </div>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>
              <Link onClick={() => onClickLinkHandler(paths[idx])}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Drawer;
