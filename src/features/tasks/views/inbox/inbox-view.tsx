import React, { useState } from "react";
import styles from "./inbox-view.module.scss";

import { TaskForm, TaskList, TaskItem } from "features/tasks";
import { useTasks, Task } from "contexts/task-context";
import { useUI } from "contexts/ui-context";
import { useTaskHandlers } from "../handlers/taskHandlers";
import { Popup, Header } from "ui";

export const Inbox = (): JSX.Element => {
  const [clickedTask, setClickedTask] = useState<Task>({} as Task);
  const Tasks = useTasks();
  const UIState = useUI();
  const TaskHandlers = useTaskHandlers(setClickedTask);

  return (
    <>
      <Header content="Inbox">
        <TaskForm
          placeholder="Enter a task..."
          onSubmit={TaskHandlers.handleCreateSubmit}
          buttonText="Add task"
        />
      </Header>

      <TaskList>
        {Tasks.completed.map((task) => (
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
