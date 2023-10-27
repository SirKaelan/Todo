import React from "react";
import styles from "./tasks.module.scss";
import { Route, Routes } from "react-router-dom";

import { TasksLayout, Inbox, Completed } from "features/tasks";

export const Tasks = (): JSX.Element => {
  return (
    <TasksLayout>
      <article className={styles.tasks_manager}>
        <Routes>
          <Route index element={<Inbox />} />
          <Route path="completed" element={<Completed />} />
        </Routes>
      </article>
    </TasksLayout>
  );
};
