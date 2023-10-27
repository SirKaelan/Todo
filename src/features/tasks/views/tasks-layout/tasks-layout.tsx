import React from "react";
import styles from "./tasks-layout.module.scss";

import { TaskNavigation } from "features/tasks";

type TasksLayoutProps = {
  children: React.ReactNode;
};

export const TasksLayout = ({ children }: TasksLayoutProps): JSX.Element => {
  return (
    <main className={styles.tasks}>
      <aside className={styles.tasks_navigation}>
        <TaskNavigation />
      </aside>
      <section className={styles.tasks_container}>{children}</section>
    </main>
  );
};
