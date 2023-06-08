import React, { useState } from "react";
import styles from "./create-todo-form.module.scss";
import { useAddTodo } from "../TodoContext";

type CreateTodoFormProps = {
  placeholderText: string;
};

type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export const CreateTodoForm = ({
  placeholderText,
}: CreateTodoFormProps): JSX.Element => {
  const addTodo = useAddTodo();

  const [todo, setTodo] = useState<string>("");

  const handleTodoSubmit = (e: FormSubmitEvent): void => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  const handleTodoInput = (e: InputChangeEvent): void => {
    setTodo(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleTodoSubmit}>
      <input
        className={styles.tasks__manager__taskInput}
        type="text"
        placeholder={placeholderText}
        value={todo}
        onChange={handleTodoInput}
        aria-label="Enter todo"
      />
      <button
        className={styles.submitBtn}
        type="submit"
        disabled={!todo ? true : false}
      >
        Add task
      </button>
    </form>
  );
};
