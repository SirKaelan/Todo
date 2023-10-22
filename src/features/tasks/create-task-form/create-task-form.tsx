import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FormSubmitEvent,
  InputChangeEvent,
  Task,
  useTasks,
} from "features/tasks";
import { Button, Form, Input } from "features/ui";

export const CreateTaskForm = (): JSX.Element => {
  const [taskContent, setTaskContent] = useState<string>("");
  const Tasks = useTasks();

  const handleTaskSubmit = (e: FormSubmitEvent): void => {
    e.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      content: taskContent,
    };

    Tasks.add(newTask);
    setTaskContent("");
  };

  const handleTaskInput = (e: InputChangeEvent): void => {
    setTaskContent(e.currentTarget.value);
  };

  return (
    <Form onFormSubmit={handleTaskSubmit}>
      <Input
        type="text"
        placeholder="Enter a task..."
        value={taskContent}
        onInputChange={handleTaskInput}
        ariaLabel="Enter task"
      />
      <Button
        color="primary"
        type="submit"
        disabled={!taskContent ? true : false}
      >
        Add task
      </Button>
    </Form>
  );
};
