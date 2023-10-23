import React, { useEffect, useState } from "react";

import {
  FormSubmitEvent,
  InputChangeEvent,
  Task,
  useTasks,
} from "features/tasks";
import { useUI, Button, Form, Input } from "features/ui";

type EditTaskProps = {
  task: Task;
};

export const EditTaskForm = ({ task }: EditTaskProps): JSX.Element => {
  const [taskContent, setTaskContent] = useState<string>("");

  const Tasks = useTasks();
  const UIState = useUI();

  // Is there a better way to initialize the state?
  useEffect(() => {
    setTaskContent(task.content);
  }, [task]);

  const handleFormSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    const newTask: Task = {
      ...task,
      content: taskContent,
    };

    Tasks.edit(newTask);
    UIState.setOverlay("hide");
  };

  const handleTaskInput = (e: InputChangeEvent): void => {
    setTaskContent(e.currentTarget.value);
  };

  return (
    <Form onFormSubmit={handleFormSubmit}>
      <Input
        type="text"
        placeholder="Change task content..."
        value={taskContent}
        onInputChange={handleTaskInput}
        ariaLabel="Edit task"
        autoFocus
      />
      <Button
        color="primary"
        type="submit"
        disabled={!taskContent ? true : false}
      >
        Edit task
      </Button>
    </Form>
  );
};
