import React, { useState, useEffect } from "react";

import { FormSubmitEvent, InputChangeEvent } from "types/eventTypes";
import {
  EditSubmitHandler,
  CreateSubmitHandler,
  TaskFormData,
  useTaskFormValidator,
} from "features/tasks";
import { Task } from "contexts/task-context";
import { Button, Form, Input } from "ui";

type TaskSubmitType = EditSubmitHandler | CreateSubmitHandler;

type TaskFormProps = {
  placeholder?: string;
  task?: Task;
  onSubmit: TaskSubmitType;
  buttonText: string;
};

export type TaskFormState = {
  content: string;
};

export const TaskForm = ({
  placeholder,
  task,
  onSubmit,
  buttonText,
}: TaskFormProps): JSX.Element => {
  const [form, setForm] = useState<TaskFormState>({ content: "" });
  const TaskFormValidator = useTaskFormValidator(form);
  const { errors, validateForm, handleBlurField, handleFocusField } =
    TaskFormValidator;

  const taskFormData: TaskFormData = {
    form,
    setForm,
    TaskFormValidator,
  };

  useEffect(() => {
    if (task) {
      setForm((prevState) => {
        return { ...prevState, content: task.content };
      });
    }
  }, [task]);

  const handleTaskInput = (e: InputChangeEvent) => {
    const field = e.target.name;
    const content = e.target.value;
    setForm((prevState) => {
      const newState = { ...prevState, content: content };
      if (errors[field].touched) validateForm(newState, field, errors);
      return newState;
    });
  };

  return (
    <Form
      onFormSubmit={(e: FormSubmitEvent) => onSubmit(e, taskFormData, task)}
    >
      <Input
        type="text"
        placeholder={placeholder}
        value={form.content}
        onInputChange={handleTaskInput}
        ariaLabel={task ? "Edit task" : "Add task"}
        autoFocus={task ? true : false}
        errorMessage={errors.task.message}
        name="task"
        autoComplete="off"
        onBlur={handleBlurField}
        onFocus={handleFocusField}
      />
      <Button color="primary" type="submit">
        {buttonText}
      </Button>
    </Form>
  );
};
