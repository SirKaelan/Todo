export enum TaskActionType {
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  EDIT_TASK = "EDIT_TASK",
  COMPLETE_TASK = "COMPLETE_TASK",
  UNCOMPLETE_TASK = "UNCOMPLETE_TASK",
  SELECT_TASK = "SELECT_TASK",
  ADD_TASKS = "ADD_TASKS",
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

type UpdateTaskAction = {
  type:
    | TaskActionType.ADD_TASK
    | TaskActionType.REMOVE_TASK
    | TaskActionType.EDIT_TASK
    | TaskActionType.COMPLETE_TASK
    | TaskActionType.UNCOMPLETE_TASK;
  payload: Task;
};

type SelectTaskAction = {
  type: TaskActionType.SELECT_TASK;
  payload: Task;
};

type DBDataAction = {
  type: TaskActionType.ADD_TASKS;
  payload: Task[];
};

export type TaskAction = UpdateTaskAction | SelectTaskAction | DBDataAction;

export type TaskProviderProps = {
  children: JSX.Element;
};

export type TaskContextType =
  | { state: TaskState; dispatch: React.Dispatch<TaskAction> }
  | undefined;
