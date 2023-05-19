import React, { useState } from "react";
import { useAddTodo } from "./TodoContext";

type CreateTodoFormProps = {
  placeholderText: string;
};

type SubmitEvent = React.FormEvent<HTMLFormElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export const CreateTodoForm = ({
  placeholderText,
}: CreateTodoFormProps): JSX.Element => {
  const addTodo = useAddTodo();

  const [todo, setTodo] = useState<string>("");

  const handleTodoSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  const handleTodoInput = (e: InputEvent): void => {
    setTodo(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleTodoSubmit}>
      <input
        type="text"
        placeholder={placeholderText}
        value={todo}
        onChange={handleTodoInput}
      />
      <button type="submit" disabled={!todo ? true : false}>
        Add task
      </button>
    </form>
  );
};
