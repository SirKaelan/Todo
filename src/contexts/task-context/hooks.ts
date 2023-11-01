import React from "react";
import { TaskContext } from "./task-context";
import { Task, TaskActionType } from "./types";

export const useTaskState = () => {
  const context = React.useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }

  const {
    state: { tasks, selectedTask },
    dispatch,
  } = context;

  return {
    tasks,
    selectedTask,
    completed: tasks.filter((task) => task.completed === false),
    uncompleted: tasks.filter((task) => task.completed === true),
    add: (payload: Task) =>
      dispatch({ type: TaskActionType.ADD_TASK, payload }),
    edit: (payload: Task) =>
      dispatch({ type: TaskActionType.EDIT_TASK, payload }),
    remove: (payload: Task) =>
      dispatch({ type: TaskActionType.REMOVE_TASK, payload }),
    complete: (payload: Task) =>
      dispatch({ type: TaskActionType.COMPLETE_TASK, payload }),
    uncomplete: (payload: Task) =>
      dispatch({ type: TaskActionType.UNCOMPLETE_TASK, payload }),
    select: (payload: Task) =>
      dispatch({ type: TaskActionType.SELECT_TASK, payload }),
    addTasks: (payload: Task[]) =>
      dispatch({ type: TaskActionType.ADD_TASKS, payload }),
  };
};
