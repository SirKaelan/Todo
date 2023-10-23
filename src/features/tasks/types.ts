// Task context
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

// UI context
export enum UIActionType {
  SHOW_OVERLAY = "SHOW_OVERLAY",
  HIDE_OVERLAY = "HIDE_OVERLAY",
}
export type UIAction = {
  type: UIActionType;
};
export type UIState = {
  overlay: boolean;
};
export type UIProviderProps = {
  children: JSX.Element;
};
export type UIContextType =
  | { state: UIState; dispatch: React.Dispatch<UIAction> }
  | undefined;

// Event types
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type InputClickEvent = React.MouseEvent<HTMLInputElement, MouseEvent>;
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export type NavigationButton = {
  label: string;
  taskCount: number;
};
