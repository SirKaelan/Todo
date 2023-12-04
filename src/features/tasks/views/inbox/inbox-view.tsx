import React from "react";

import { TaskForm, TaskList, TaskItem, useTasks } from "features/tasks";
import { useUI } from "contexts/ui-context";
import { useTaskHandlers } from "../handlers/taskHandlers";
import { Popup, Header } from "ui";

export const Inbox = (): JSX.Element => {
  const Tasks = useTasks();
  const UIState = useUI();
  const TaskHandlers = useTaskHandlers();

  // Could maybe try to make a hook out of this (so i can use it in "completed" page as well)

  let draggedTask = 0;
  let draggedOverTask = 0;

  const handleDragStart = (index: number) => (draggedTask = index);
  const handleDragEnter = (index: number) => (draggedOverTask = index);
  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) =>
    e.preventDefault();
  const handleDragEnd = () => {
    const newTasks = [...Tasks.uncompleted];
    const temp = newTasks[draggedTask];
    newTasks[draggedTask] = newTasks[draggedOverTask];
    newTasks[draggedOverTask] = temp;
    Tasks.addTasks(newTasks);
  };

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
