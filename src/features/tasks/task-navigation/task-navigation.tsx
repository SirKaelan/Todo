import React from "react";
import styles from "./task-navigation.module.scss";

import { useTasks } from "contexts/task-context";
import { NavButton } from "features/tasks";
import { NavigationButton } from "./types";

export const TaskNavigation = (): JSX.Element => {
  const Tasks = useTasks();

  const navButtons: NavigationButton[] = [
    { label: "inbox", taskCount: Tasks.completed.length },
    { label: "completed", taskCount: Tasks.uncompleted.length },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_container}>
        {navButtons.map((button) => (
          <li key={button.label}>
            <NavButton buttonData={button} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
