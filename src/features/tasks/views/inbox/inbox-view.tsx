import React from "react";

import { TaskForm, TaskList, TaskItem, useTasks } from "features/tasks";
import { useUI } from "contexts/ui-context";
import { useTaskHandlers } from "../handlers/taskHandlers";
import { Popup, Header } from "ui";

export const Inbox = (): JSX.Element => {
  const Tasks = useTasks();
  const UIState = useUI();
  const TaskHandlers = useTaskHandlers();

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
          task={Tasks.selectedTask}
          placeholder="Enter a task..."
          onSubmit={TaskHandlers.handleEditSubmit}
          buttonText="Edit task"
        />
      </Popup>
    </>
  );
};
