import React, { useState } from "react";
import styles from "./inbox-view.module.scss";
import { CreateTaskForm, EditTaskForm, TaskList } from "features/tasks";
import { Popup, useGetOverlay, useSetOverlay } from "features/ui";
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
      <section style={{ width: "100%" }}>
        <TaskList setClickedTask={setClickedTask} />
      </section>
      <Popup show={showOverlay} close={() => setOverlay(false)}>
        <EditTaskForm task={clickedTask} />
      </Popup>
    </>
  );
};
