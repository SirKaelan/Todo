import React from "react";

import { FormSubmitEvent, ButtonClickEvent } from "types/eventTypes";
import { InputState } from "features/tasks";
import { Task, useTasks } from "contexts/task-context";
import { useUI } from "contexts/ui-context";
import { v4 as uuidv4 } from "uuid";

type ClickedTaskSetter = React.Dispatch<React.SetStateAction<Task>>;

export const useTaskHandlers = (setClickedTask: ClickedTaskSetter) => {
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
      completed: false,
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

  return {
    handleCreateSubmit,
    handleEditSubmit,
    handleTaskClick,
    handleRemoveClick,
  };
};
