import React, { useState } from "react";
import styles from "./inbox-view.module.scss";

import { TaskForm, TaskList, TaskItem } from "features/tasks";
import { useTasks, Task } from "contexts/task-context";
import { useUI } from "contexts/ui-context";
import { useTaskHandlers } from "../taskHandlers";
import { Popup } from "ui";

export const Inbox = (): JSX.Element => {
  const [clickedTask, setClickedTask] = useState<Task>({} as Task);
  const Tasks = useTasks();
  const UIState = useUI();
  const TaskHandlers = useTaskHandlers(setClickedTask);

  const handlePopupClose = () => UIState.setOverlay("hide");

  return (
    <>
      <header className={styles.header_container}>
        <h2 className={styles.header_title}>Inbox</h2>
        <TaskForm
          placeholder="Enter a task..."
          onSubmit={TaskHandlers.handleCreateSubmit}
          buttonText="Add task"
        />
      </header>

      <TaskList>
        {Tasks.state.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onRemove={TaskHandlers.handleRemoveClick}
            onClick={TaskHandlers.handleTaskClick}
          />
        ))}
      </TaskList>

      <Popup show={UIState.state.overlay} close={handlePopupClose}>
        <TaskForm
          task={clickedTask}
          placeholder="Enter a task..."
          onSubmit={TaskHandlers.handleEditSubmit}
          buttonText="Edit task"
        />
      </Popup>
    </>
  );
};
