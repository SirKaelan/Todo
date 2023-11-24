import { useState } from "react";
import { InputBlurEvent, InputFocusEvent } from "types/eventTypes";
import { taskValidator } from "./validators";
import { ErrorsFormat, TaskFormState } from "features/tasks";

type ValidateForm = (
  form: TaskFormState,
  field: string | null,
  errors: ErrorsFormat,
  forceTouchFields?: boolean
) => {
  isValid: boolean;
  errors: ErrorsFormat;
};

type BlurHandler = (e: InputBlurEvent) => void;
type FocusHandler = (e: InputFocusEvent) => void;

export type FormValidatorHookReturnType = {
  validateForm: ValidateForm;
  errors: ErrorsFormat;
  handleBlurField: BlurHandler;
  handleFocusField: FocusHandler;
};

type TaskFormValidator = (form: TaskFormState) => FormValidatorHookReturnType;

const touchFields = (errors: ErrorsFormat): ErrorsFormat => {
  return Object.entries(errors).reduce<ErrorsFormat>(
    (newObj, [field, fieldErrors]) => {
      newObj[field] = {
        ...fieldErrors,
        touched: true,
      };
      return newObj;
    },
    {}
  );
};

export const useTaskFormValidator: TaskFormValidator = (form) => {
  const [errors, setErrors] = useState<ErrorsFormat>({
    task: {
      touched: false,
      focused: false,
      error: false,
      message: "",
    },
  });

  const validateForm: ValidateForm = (
    form,
    field,
    errors,
    forceTouchFields = false
  ) => {
    let isValid: boolean = true;
    // Deep copy
    let updatedErrors: ErrorsFormat = JSON.parse(JSON.stringify(errors));

    if (forceTouchFields) updatedErrors = touchFields(errors);

    const { content } = form;

    if (updatedErrors.task.touched && (field ? field === "task" : true)) {
      const taskMessage = taskValidator(content);
      updatedErrors.task.error = !!taskMessage;
      updatedErrors.task.message = taskMessage;
      // Questionable solution
      if (!updatedErrors.task.focused) {
        updatedErrors.task.error = false;
        updatedErrors.task.message = "";
      }
      if (!!taskMessage) isValid = false;
    }

    setErrors(updatedErrors);

    return {
      isValid,
      errors: updatedErrors,
    };
  };

  const handleBlurField: BlurHandler = (e): void => {
    const field = e.target.name;
    const fieldErrors = errors[field];
    const updatedErrors: ErrorsFormat = {
      ...errors,
      [field]: {
        ...fieldErrors,
        touched: true,
        focused: false,
      },
    };
    validateForm(form, field, updatedErrors);
  };

  const handleFocusField: FocusHandler = (e) => {
    const field = e.target.name;
    const fieldErrors = errors[field];
    const updatedErrors: ErrorsFormat = {
      ...errors,
      [field]: {
        ...fieldErrors,
        focused: true,
      },
    };
    validateForm(form, field, updatedErrors);
  };

  return { validateForm, errors, handleBlurField, handleFocusField };
};
