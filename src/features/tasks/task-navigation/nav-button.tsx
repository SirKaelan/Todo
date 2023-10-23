import React from "react";
import styles from "./task-navigation.module.scss";

import { Link, useLocation } from "react-router-dom";
import { genericUtils } from "utils";
import { NavigationButton } from "./types";

type NavButtonProps = {
  buttonData: NavigationButton;
};

export const NavButton = ({ buttonData }: NavButtonProps): JSX.Element => {
  const location = useLocation();
  const endpoint = buttonData.label === "inbox" ? "/" : `/${buttonData.label}`;
  const endpointMatch = location.pathname === endpoint;

  return (
    <Link
      to={endpoint}
      className={`${styles.nav_button} ${endpointMatch && "selected"}`}
    >
      <div className={styles.nav_text}>
        {genericUtils.capitalizeFirstLetter(buttonData.label)}
      </div>
      <div className={styles.nav_number}>{buttonData.taskCount}</div>
    </Link>
  );
};
