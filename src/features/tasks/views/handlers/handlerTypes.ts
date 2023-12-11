import {
  FormSubmitEvent,
  ButtonClickEvent,
  InputChangeEvent,
  SpanClickEvent,
} from "types/eventTypes";
import { TaskFormData } from "features/tasks";
import { Task } from "contexts/task-context";

export type CreateSubmitHandler = (
  e: FormSubmitEvent,
  taskFormData: TaskFormData
) => void;
export type EditSubmitHandler = (
  e: FormSubmitEvent,
  taskFormData: TaskFormData,
  task?: Task
) => void;
export type TaskClickHandler = (task: Task) => void;
export type TaskRemoveHandler = (
  e: ButtonClickEvent | SpanClickEvent,
  task: Task
) => void;
export type CheckboxChangeHandler = (e: InputChangeEvent, task: Task) => void;
