import React, { useState } from "react";
import styles from "./inbox-view.module.scss";
import { Popup, useGetOverlay, useSetOverlay } from "features/ui";
import {
  CreateTaskForm,
  EditTaskForm,
  TaskList,
  useTasks,
  TaskItem,
  Task,
} from "features/tasks";

export const Inbox = (): JSX.Element => {
  // TODO: Think about changing this value to be an ID
  // and make this component search for the task from state
  const [clickedTask, setClickedTask] = useState<Task>({} as Task);
  const Tasks = useTasks();

  // TODO: Fix UI state to use a more concise form of the API
  const showOverlay = useGetOverlay();
  const setOverlay = useSetOverlay();

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
      <Popup show={showOverlay} close={() => setOverlay(false)}>
        <EditTaskForm task={clickedTask} />
      </Popup>
    </>
  );
};
