import {
  FormSubmitEvent,
  ButtonClickEvent,
  InputChangeEvent,
} from "types/eventTypes";
import { InputState } from "features/tasks";
import { Task } from "contexts/task-context";

export type CreateSubmitHandler = (
  e: FormSubmitEvent,
  inputState: InputState
) => void;
export type EditSubmitHandler = (
  e: FormSubmitEvent,
  inputState: InputState,
  task?: Task
) => void;
export type TaskClickHandler = (task: Task) => void;
export type TaskRemoveHandler = (e: ButtonClickEvent, task: Task) => void;
export type CheckboxChangeHandler = (e: InputChangeEvent, task: Task) => void;
