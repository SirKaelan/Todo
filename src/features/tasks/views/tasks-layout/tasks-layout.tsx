import React from "react";
import styles from "./tasks-layout.module.scss";

import { TaskNavigation, useNavButtons } from "features/tasks";
import { Hamburger } from "ui";

type TasksLayoutProps = {
  children: React.ReactNode;
};

export const TasksLayout = ({ children }: TasksLayoutProps): JSX.Element => {
  const navButtons = useNavButtons();

  return (
    <main className={styles.tasks}>
      <Hamburger buttons={navButtons} />
      <aside className={styles.tasks_navigation}>
        <TaskNavigation buttons={navButtons} />
      </aside>
      <section className={styles.tasks_container}>{children}</section>
    </main>
  );
};
