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

export const TaskProvider = ({ children }: TaskProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(taskReducer, INITIAL_STATE);

  const value = { state, dispatch };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTasks = () => {
  const context = React.useContext(TaskContext);

  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }

  const { state, dispatch } = context;

  const add = (payload: Task) =>
    dispatch({ type: ActionType.ADD_TASK, payload });
  const edit = (payload: Task) =>
    dispatch({ type: ActionType.EDIT_TASK, payload });
  const remove = (payload: Task) =>
    dispatch({ type: ActionType.REMOVE_TASK, payload });

  return { state, add, edit, remove };
};
