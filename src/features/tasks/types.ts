// Task context
export enum ActionType {
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  EDIT_TASK = "EDIT_TASK",
}

export type Task = {
  id: string;
  content: string;
};

export type State = Task[];

export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type NavigationButton = {
  label: string;
  taskCount: number;
};

export type InputClickEvent = React.MouseEvent<HTMLInputElement, MouseEvent>;

export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
