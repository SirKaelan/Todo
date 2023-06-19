import React from "react";
import styles from "./tasks.module.scss";
import { Route, Routes } from "react-router-dom";

import { TaskNavigation } from "features/tasks";
import { Inbox } from "features/tasks";
import { Completed } from "features/tasks";

export const Home = (): JSX.Element => {
  return (
    <main className={styles.tasks}>
      <TaskNavigation />

      <article className={styles.tasks__manager}>
        <div className={styles.tasks__manager__container}>
          <Routes>
            <Route index element={<Inbox />} />
            <Route path="completed" element={<Completed />} />
          </Routes>
        </div>
      </article>
    </main>
  );
};
