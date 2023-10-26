import React, { useState } from "react";
import styles from "./completed-view.module.scss";

import { TaskList, TaskItem, TaskForm } from "features/tasks";
import { Task, useTasks } from "contexts/task-context";
import { useUI } from "contexts/ui-context";
import { useTaskHandlers } from "../handlers/taskHandlers";
import { Popup, Header } from "ui";

export const Completed = (): JSX.Element => {
  // TODO: Get this out to global state
  const [clickedTask, setClickedTask] = useState<Task>({} as Task);
  const Tasks = useTasks();
  const UIState = useUI();
  const TaskHandlers = useTaskHandlers(setClickedTask);

  return (
    <>
      <Header content="Completed" />

      {Tasks.uncompleted.length ? (
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
      ) : (
        <p>No completed tasks!</p>
      )}

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
