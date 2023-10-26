import React from "react";

import { Task, useTasks } from "contexts/task-context";
import { useUI } from "contexts/ui-context";
import { v4 as uuidv4 } from "uuid";
import {
  CheckboxChangeHandler,
  CreateSubmitHandler,
  EditSubmitHandler,
  TaskClickHandler,
  TaskRemoveHandler,
} from "./handlerTypes";

type ClickedTaskSetter = React.Dispatch<React.SetStateAction<Task>>;

export const useTaskHandlers = (setClickedTask: ClickedTaskSetter) => {
  const Tasks = useTasks();
  const UIState = useUI();

  const handleCreateSubmit: CreateSubmitHandler = (e, inputState): void => {
    e.preventDefault();
    const newTask: Task = {
      id: uuidv4(),
      content: inputState.taskContent.trim(),
      completed: false,
    };

    Tasks.add(newTask);
    inputState.setTaskContent("");
  };

  const handleEditSubmit: EditSubmitHandler = (e, inputState, task): void => {
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

  const handleTaskClick: TaskClickHandler = (task): void => {
    setClickedTask(task);
    UIState.setOverlay("show");
  };

  const handleRemoveClick: TaskRemoveHandler = (e, task): void => {
    e.stopPropagation();
    Tasks.remove(task);
  };

  const handleCheckboxChange: CheckboxChangeHandler = (e, task): void => {
    if (e.currentTarget.checked) Tasks.complete(task);
    else Tasks.uncomplete(task);
  };

  const handlePopupClose = () => UIState.setOverlay("hide");

  return {
    handleCreateSubmit,
    handleEditSubmit,
    handleTaskClick,
    handleRemoveClick,
    handleCheckboxChange,
    handlePopupClose,
  };
};
