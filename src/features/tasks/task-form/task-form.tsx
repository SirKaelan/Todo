import React, { useState, useEffect } from "react";

import { FormSubmitEvent, InputChangeEvent } from "types/eventTypes";
import { EditSubmitHandler, CreateSubmitHandler } from "features/tasks";
import { Task } from "contexts/task-context";
import { Button, Form, Input } from "ui";

type TaskSubmitType = EditSubmitHandler | CreateSubmitHandler;

type TaskFormProps = {
  placeholder?: string;
  task?: Task;
  onSubmit: TaskSubmitType;
  buttonText: string;
};

export const TaskForm = ({
  placeholder,
  task,
  onSubmit,
  buttonText,
}: TaskFormProps): JSX.Element => {
  const [taskContent, setTaskContent] = useState<string>("");
  const inputState = { taskContent, setTaskContent };

  useEffect(() => {
    if (task) setTaskContent(task.content);
  }, [task]);

  const handleTaskInput = (e: InputChangeEvent) => {
    setTaskContent(e.currentTarget.value);
  };

  return (
    <Form onFormSubmit={(e: FormSubmitEvent) => onSubmit(e, inputState, task)}>
      <Input
        type="text"
        placeholder={placeholder}
        value={taskContent}
        onInputChange={handleTaskInput}
        ariaLabel={task ? "Edit task" : "Add task"}
        autoFocus={task ? true : false}
      />
      <Button
        color="primary"
        type="submit"
        disabled={!taskContent ? true : false}
      >
        {buttonText}
      </Button>
    </Form>
  );
};
