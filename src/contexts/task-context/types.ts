export enum TaskActionType {
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  EDIT_TASK = "EDIT_TASK",
}

export type Task = {
  id: string;
  content: string;
};

export type TaskState = Task[];

export type TaskAction = {
  type: TaskActionType;
  payload: Task;
};

export type TaskProviderProps = {
  children: JSX.Element;
};

export type TaskContextType =
  | { state: TaskState; dispatch: React.Dispatch<TaskAction> }
  | undefined;
