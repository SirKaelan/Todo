import React from "react";

import {
  TaskForm,
  TaskList,
  TaskItem,
  useTasks,
  useTaskListDND,
} from "features/tasks";
import { useUI } from "contexts/ui-context";
import { useTaskHandlers } from "../handlers/taskHandlers";
import { Popup, Header } from "ui";

export const Inbox = (): JSX.Element => {
  const Tasks = useTasks();
  const UIState = useUI();
  const TaskHandlers = useTaskHandlers();
  const { handleDragEnd, handleDragEnter, handleDragOver, handleDragStart } =
    useTaskListDND(Tasks.uncompleted);

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
        {Tasks.uncompleted.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            onTaskRemove={TaskHandlers.handleRemoveClick}
            onTaskClick={TaskHandlers.handleTaskClick}
            onCheckboxChange={TaskHandlers.handleCheckboxChange}
            draggable="true"
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragOver={(e) => handleDragOver(e)}
            onDragEnd={() => handleDragEnd()}
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
