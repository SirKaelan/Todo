import React from "react";
import { TaskContext } from "./task-context";
import { Task, TaskActionType } from "./types";

export const useTasks = () => {
  const context = React.useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }

  const {
    state: { tasks, selectedTask },
    dispatch,
  } = context;

  // Consider putting everything below into an object?
  const completed = tasks.filter((task) => task.completed === false);
  const uncompleted = tasks.filter((task) => task.completed === true);

  const add = (payload: Task) =>
    dispatch({ type: TaskActionType.ADD_TASK, payload });
  const edit = (payload: Task) =>
    dispatch({ type: TaskActionType.EDIT_TASK, payload });
  const remove = (payload: Task) =>
    dispatch({ type: TaskActionType.REMOVE_TASK, payload });
  const complete = (payload: Task) =>
    dispatch({ type: TaskActionType.COMPLETE_TASK, payload });
  const uncomplete = (payload: Task) =>
    dispatch({ type: TaskActionType.UNCOMPLETE_TASK, payload });
  const select = (payload: Task) =>
    dispatch({ type: TaskActionType.SELECT_TASK, payload });

  return {
    tasks,
    selectedTask,
    add,
    edit,
    remove,
    complete,
    uncomplete,
    completed,
    uncompleted,
    select,
  };
};
