import React, { useEffect, useState } from "react";
import styles from "./edit-task-form.module.scss";

import {
  FormSubmitEvent,
  InputChangeEvent,
  Task,
  useTasks,
} from "features/tasks";
import { useSetOverlay, Button } from "features/ui";

type EditTaskProps = {
  task: Task;
};

export const EditTaskForm = ({ task }: EditTaskProps): JSX.Element => {
  const [taskContent, setTaskContent] = useState<string>("");

  const Tasks = useTasks();
  const setOverlay = useSetOverlay();

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
    setOverlay(false);
  };

  const handleTaskInput = (e: InputChangeEvent): void => {
    setTaskContent(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <input
        className={styles.form_input}
        type="text"
        placeholder="Change the task content..."
        value={taskContent}
        onChange={handleTaskInput}
        aria-label="Edit task"
        autoFocus
      />
      <Button
        color="primary"
        type="submit"
        disabled={!taskContent ? true : false}
      >
        Edit task
      </Button>
    </form>
  );
};
