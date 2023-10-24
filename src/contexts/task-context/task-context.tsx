import React from "react";

import { TaskContextType, TaskProviderProps, TaskState } from "./types";
import { taskReducer } from "./reducer";

const INITIAL_STATE: TaskState = [];

export const TaskContext = React.createContext<TaskContextType>(undefined);

export const TaskProvider = ({ children }: TaskProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(taskReducer, INITIAL_STATE);

  const value = { state, dispatch };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
