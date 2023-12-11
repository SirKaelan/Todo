import React from "react";
import styles from "./ham-button.module.scss";

import { NavigationButton } from "features/tasks";
import { Link } from "react-router-dom";

type HamButtonProps = {
  buttonData: NavigationButton;
  onClick: () => void;
};

export const HamButton = ({
  buttonData,
  onClick,
}: HamButtonProps): JSX.Element => {
  const endpoint = buttonData.label === "inbox" ? "/" : `/${buttonData.label}`;

  return (
    <Link to={endpoint} className={styles.ham_button} onClick={onClick}>
      {buttonData.label}
    </Link>
  );
};
