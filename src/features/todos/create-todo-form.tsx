import React, { useState } from "react";

type CreateTodoFormProps = {
  placeholderText: string;
};

type SubmitEvent = React.FormEvent<HTMLFormElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export const CreateTodoForm = ({
  placeholderText,
}: CreateTodoFormProps): JSX.Element => {
  const [todo, setTodo] = useState<string>("");

  const handleTodoSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
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
      <button type="submit">Add task</button>
    </form>
  );
};
