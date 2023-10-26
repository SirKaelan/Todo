import React from "react";
import { TaskContext } from "./task-context";
import { Task, TaskActionType } from "./types";

export const useTasks = () => {
  const context = React.useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }

  const { state, dispatch } = context;

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

  return { state, add, edit, remove };
};
