import React, { useState } from "react";
import styles from "./inbox-view.module.scss";

import {
  CreateTaskForm,
  EditTaskForm,
  TaskList,
  TaskItem,
} from "features/tasks";
import { useTasks, Task } from "contexts/task-context";
import { useUI } from "contexts/ui-context";
import { Popup } from "ui";

export const Inbox = (): JSX.Element => {
  // TODO: Think about changing this value to be an ID
  // and make this component search for the task from state
  const [clickedTask, setClickedTask] = useState<Task>({} as Task);

  const Tasks = useTasks();
  const { state: UIState, setOverlay } = useUI();

  return (
    <>
      <header className={styles.header_container}>
        <h2 className={styles.header_title}>Inbox</h2>
        <CreateTaskForm />
      </header>
      <TaskList>
        {Tasks.state.map((task) => (
          <TaskItem key={task.id} task={task} setClickedTask={setClickedTask} />
        ))}
      </TaskList>
      <Popup show={UIState.overlay} close={() => setOverlay("hide")}>
        <EditTaskForm task={clickedTask} />
      </Popup>
    </>
  );
};
