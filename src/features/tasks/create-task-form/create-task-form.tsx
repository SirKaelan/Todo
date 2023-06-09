import React, { useState } from "react";
import styles from "./create-task-form.module.scss";
import { useAddTask } from "../TaskContext";

type CreateTaskFormProps = {
  placeholderText: string;
};

type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const CreateTaskForm = ({
  placeholderText,
}: CreateTaskFormProps): JSX.Element => {
  const addTask = useAddTask();

  const [task, setTask] = useState<string>("");

  const handleTaskSubmit = (e: FormSubmitEvent): void => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  const handleTaskInput = (e: InputChangeEvent): void => {
    setTask(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleTaskSubmit}>
      <input
        className={styles.tasks__manager__taskInput}
        type="text"
        placeholder={placeholderText}
        value={task}
        onChange={handleTaskInput}
        aria-label="Enter task"
      />
      <button
        className={styles.submitBtn}
        type="submit"
        disabled={!task ? true : false}
      >
        Add task
      </button>
    </form>
  );
};
