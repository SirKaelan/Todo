import React, { useState } from "react";

type CreateTodoFormProps = {
  placeholderText: string;
};

type SubmitEvent = React.FormEvent<HTMLFormElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

export const CreateTodoForm = ({
  placeholderText,
}: CreateTodoFormProps): JSX.Element => {
  const [todoTask, setTodoTask] = useState<string>("");

  const handleTodoSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    setTodoTask("");
  };

  const handleTodoInput = (e: InputEvent): void => {
    setTodoTask(e.currentTarget.value);
  };

  return (
    <form onSubmit={handleTodoSubmit}>
      <input
        type="text"
        placeholder={placeholderText}
        value={todoTask}
        onChange={handleTodoInput}
      />
      <button type="submit">Add task</button>
    </form>
  );
};
