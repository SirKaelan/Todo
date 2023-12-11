import React from "react";

import {
  TaskList,
  TaskItem,
  TaskForm,
  useTasks,
  useTaskListDND,
} from "features/tasks";
import { useUI } from "contexts/ui-context";
import { useTaskHandlers } from "../handlers/taskHandlers";
import { Popup, Header } from "ui";

export const Completed = (): JSX.Element => {
  const Tasks = useTasks();
  const UIState = useUI();
  const TaskHandlers = useTaskHandlers();
  const { handleDragEnd, handleDragEnter, handleDragOver, handleDragStart } =
    useTaskListDND(Tasks.completed);

  return (
    <>
      <Header content="Completed" />

      {Tasks.completed.length ? (
        <TaskList>
          {Tasks.completed.map((task, index) => (
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
      ) : (
        <p>No completed tasks!</p>
      )}

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
