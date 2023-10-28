import React, { useState } from "react";
import styles from "./hamburger.module.scss";

export const Hamburger = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  const handleBurgerClick = () => setShow((prevState) => !prevState);

  return (
    <div
      className={`${styles.hamburger} ${show ? styles.active : null}`}
      onClick={handleBurgerClick}
    >
      <div className={`${styles.line} ${styles.line_1}`}></div>
      <div className={`${styles.line} ${styles.line_2}`}></div>
      <div className={`${styles.line} ${styles.line_3}`}></div>
    </div>
  );
};
