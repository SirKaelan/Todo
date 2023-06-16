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

// Global? (eventually these probably should be in an external file)
export type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
