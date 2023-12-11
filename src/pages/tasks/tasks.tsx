import React, { useEffect } from "react";
import styles from "./tasks.module.scss";
import { Route, Routes } from "react-router-dom";

import { TasksLayout, Inbox, Completed } from "features/tasks";
import { useTasks } from "features/tasks";

export const Tasks = (): JSX.Element => {
  const Tasks = useTasks();

  // Very sussy code, but it works
  useEffect(() => {
    Tasks.syncTasks();
  }, []);

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
