import React from "react";
import styles from "./tasks.module.scss";
import { Route, Routes } from "react-router-dom";

import { TaskNavigation, Inbox, Completed } from "features/tasks";

export const Tasks = (): JSX.Element => {
  return (
    <main className={styles.tasks}>
      <aside className={styles.tasks_navigation}>
        <TaskNavigation />
      </aside>
      <section className={styles.tasks_wrapper}>
        <article className={styles.tasks_manager}>
          <Routes>
            <Route index element={<Inbox />} />
            <Route path="completed" element={<Completed />} />
          </Routes>
        </article>
      </section>
    </main>
  );
};
