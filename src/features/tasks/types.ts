import { FormValidatorHookReturnType } from "./hooks/task-form-validation/useTaskFormValidator";
import { TaskFormState } from "./task-form/task-form";

export type ErrorsFormat = {
  [key: string]: {
    touched: boolean;
    focused: boolean;
    error: boolean;
    message: string;
  };
};

export type TaskFormData = {
  form: TaskFormState;
  setForm: React.Dispatch<React.SetStateAction<TaskFormState>>;
  TaskFormValidator: FormValidatorHookReturnType;
};
