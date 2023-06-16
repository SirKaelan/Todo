import React from "react";
import { ActionType, Task, State } from "features/tasks/types";

// With this we don't need to pass an initial value
type TaskContextType =
  | { state: State; dispatch: React.Dispatch<Action> }
  | undefined;

type TaskProviderProps = {
  children: JSX.Element;
};

type Action = {
  type: ActionType;
  payload: Task;
};

const taskReducer = (state: State, action: Action): State => {
  const { payload } = action;

  switch (action.type) {
    case ActionType.ADD_TASK:
      return [...state, payload];
    case ActionType.EDIT_TASK:
      return state.map((task) => (task.id === payload.id ? payload : task));
    case ActionType.REMOVE_TASK:
      return state.filter((task) => task.id !== payload.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TaskContext = React.createContext<TaskContextType>(undefined);

const INITIAL_STATE: State = [];

export const CopyTaskProvider = ({
  children,
}: TaskProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(taskReducer, INITIAL_STATE);

  const value = { state, dispatch };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => {
  const context = React.useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useTask must be used within a TaskProvider");
  }

  return context;
};
