import React, { useState } from "react";
import styles from "./hamburger.module.scss";

import { NavigationButton } from "features/tasks";
import { HamButton } from "ui";

type HamburgerProps = {
  buttons: NavigationButton[];
};

export const Hamburger = ({ buttons }: HamburgerProps): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);

  const handleBurgerClick = () => setShow((prevState) => !prevState);
  const handleButtonClick = () => setShow(false);

  return (
    <>
      <div
        className={`${styles.hamburger} ${show ? styles.active : null}`}
        onClick={handleBurgerClick}
      >
        <div className={`${styles.line} ${styles.line_1}`}></div>
        <div className={`${styles.line} ${styles.line_2}`}></div>
        <div className={`${styles.line} ${styles.line_3}`}></div>
      </div>
      <div className={styles.background}></div>
      <div className={styles.drawer}>
        <div className={styles.drawer_container}>
          {buttons.map((button) => (
            <HamButton buttonData={button} onClick={handleButtonClick} />
          ))}
        </div>
      </div>
    </>
  );
};
