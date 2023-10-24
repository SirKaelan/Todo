import React, { useState } from "react";
import styles from "./inbox-view.module.scss";

import { TaskForm, TaskList, TaskItem, InputState } from "features/tasks";
import { useTasks, Task } from "contexts/task-context";
import { useUI } from "contexts/ui-context";
import { Popup } from "ui";
import { ButtonClickEvent, FormSubmitEvent } from "types/eventTypes";
import { v4 as uuidv4 } from "uuid";

export const Inbox = (): JSX.Element => {
  const [clickedTask, setClickedTask] = useState<Task>({} as Task);
  const Tasks = useTasks();
  const UIState = useUI();

  const handleCreateSubmit = (
    e: FormSubmitEvent,
    inputState: InputState
  ): void => {
    e.preventDefault();
    const newTask: Task = {
      id: uuidv4(),
      content: inputState.taskContent.trim(),
    };

    Tasks.add(newTask);
    inputState.setTaskContent("");
  };

  const handleEditSubmit = (
    e: FormSubmitEvent,
    inputState: InputState,
    task?: Task
  ): void => {
    e.preventDefault();

    if (task === undefined)
      throw new Error("'task' prop was not provided to 'TaskForm' component.");

    const editedTask: Task = {
      ...(task as Task),
      content: inputState.taskContent.trim(),
    };

    Tasks.edit(editedTask);
    UIState.setOverlay("hide");
  };

  const handleTaskClick = (task: Task): void => {
    setClickedTask(task);
    UIState.setOverlay("show");
  };

  const handleRemoveClick = (e: ButtonClickEvent, task: Task): void => {
    e.stopPropagation();
    Tasks.remove(task);
  };

  const handlePopupClose = () => UIState.setOverlay("hide");

  return (
    <>
      <header className={styles.header_container}>
        <h2 className={styles.header_title}>Inbox</h2>
        <TaskForm
          placeholder="Enter a task..."
          onSubmit={handleCreateSubmit}
          buttonText="Add task"
        />
      </header>

      <TaskList>
        {Tasks.state.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onRemove={handleRemoveClick}
            onClick={handleTaskClick}
          />
        ))}
      </TaskList>

      <Popup show={UIState.state.overlay} close={handlePopupClose}>
        <TaskForm
          task={clickedTask}
          placeholder="Enter a task..."
          onSubmit={handleEditSubmit}
          buttonText="Edit task"
        />
      </Popup>
    </>
  );
};
