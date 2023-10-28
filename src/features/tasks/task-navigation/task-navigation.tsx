import React from "react";
import styles from "./task-navigation.module.scss";

import { NavigationButton, NavButton } from "features/tasks";

type TaskNavigationProps = {
  buttons: NavigationButton[];
};

export const TaskNavigation = ({
  buttons,
}: TaskNavigationProps): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_container}>
        {buttons.map((button) => (
          <li key={button.label}>
            <NavButton buttonData={button} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
