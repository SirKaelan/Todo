export enum TaskActionType {
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  EDIT_TASK = "EDIT_TASK",
  COMPLETE_TASK = "COMPLETE_TASK",
  UNCOMPLETE_TASK = "UNCOMPLETE_TASK",
  SELECT_TASK = "SELECT_TASK",
}

export type Task = {
  id: string;
  content: string;
  completed: boolean;
};

export type TaskState = {
  tasks: Task[];
  selectedTask: Task;
};

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
