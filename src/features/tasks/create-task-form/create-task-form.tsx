import React, { useState } from "react";
import styles from "./create-task-form.module.scss";
import { v4 as uuidv4 } from "uuid";
import {
  FormSubmitEvent,
  InputChangeEvent,
  Task,
  useTasks,
} from "features/tasks";
import { Button } from "features/ui";

type CreateTaskFormProps = {
  placeholderText: string;
};

export const CreateTaskForm = ({
  placeholderText,
}: CreateTaskFormProps): JSX.Element => {
  const [task, setTask] = useState<string>("");

  const Tasks = useTasks();

  const handleTaskSubmit = (e: FormSubmitEvent): void => {
    e.preventDefault();

    const newTask: Task = {
      id: uuidv4(),
      content: task,
    };

    Tasks.add(newTask);
    setTask("");
  };

  const handleTaskInput = (e: InputChangeEvent): void => {
    setTask(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleTaskSubmit} className={styles.form}>
      <input
        className={styles.form__input}
        type="text"
        placeholder={placeholderText}
        value={task}
        onChange={handleTaskInput}
        aria-label="Enter task"
      />
      <Button color="primary" type="submit" disabled={!task ? true : false}>
        Add task
      </Button>
    </form>
  );
};
