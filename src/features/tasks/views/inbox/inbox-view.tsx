import React, { useState } from "react";
import styles from "./inbox-view.module.scss";
import {
  TaskProvider,
  CreateTaskForm,
  EditTaskForm,
  TaskList,
} from "features/tasks";
import { Dialog, useGetOverlay, useSetOverlay } from "features/ui";
import { Task } from "features/tasks/types";

export const Inbox = (): JSX.Element => {
  // This makes page context useless (i think)
  const [clickedTask, setClickedTask] = useState<Task>({} as Task);

  const showOverlay = useGetOverlay();
  const setOverlay = useSetOverlay();

  return (
    <>
      <header className={styles.tasks__manager__headerContainer}>
        <h2 className={styles.tasks__manager__headerTitle}>Inbox</h2>
        <CreateTaskForm placeholderText="Enter a task..." />
      </header>
      <section>
        <TaskList setClickedTask={setClickedTask} />
        <Dialog open={showOverlay} onClose={() => setOverlay(false)}>
          {showOverlay && <EditTaskForm task={clickedTask} />}
        </Dialog>
      </section>
    </>
  );
};
