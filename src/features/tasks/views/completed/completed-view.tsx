import React, { useState } from "react";
import styles from "./completed-view.module.scss";

import { TaskList, TaskItem, TaskForm } from "features/tasks";
import { Task, useTasks } from "contexts/task-context";
import { useUI } from "contexts/ui-context";
import { useTaskHandlers } from "../handlers/taskHandlers";
import { Popup } from "ui";

export const Completed = (): JSX.Element => {
  // TODO: Get this out to global state
  const [clickedTask, setClickedTask] = useState<Task>({} as Task);
  const Tasks = useTasks();
  const UIState = useUI();
  const TaskHandlers = useTaskHandlers(setClickedTask);

  return (
    <>
      {/* TODO: Make reusable header */}
      <header className={styles.header_container}>
        <h2 className={styles.header_title}>Completed</h2>
      </header>

      <TaskList>
        {Tasks.uncompleted.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskRemove={TaskHandlers.handleRemoveClick}
            onTaskClick={TaskHandlers.handleTaskClick}
            onCheckboxChange={TaskHandlers.handleCheckboxChange}
          />
        ))}
      </TaskList>

      <Popup show={UIState.state.overlay} close={TaskHandlers.handlePopupClose}>
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
