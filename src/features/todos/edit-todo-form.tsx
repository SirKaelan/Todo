import React, { useState } from "react";
import { useGetTodo, useEditTodo } from "./TodoContext";
import { useSetOverlay } from "../ui";

type EditTodoProps = {
  todoId: string;
};
// Extract these types to external file
type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FormClickEvent = React.MouseEvent<HTMLFormElement, MouseEvent>;

export const EditTodoForm = ({ todoId }: EditTodoProps): JSX.Element => {
  const todo = useGetTodo()(todoId);
  const editTodo = useEditTodo();
  const setOverlay = useSetOverlay();

  // Not sure if setting the initial state like this is ideal
  const [todoContent, setTodoContent] = useState<string>(todo.content);

  const handleFormSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    editTodo(todoId, todoContent);
    setOverlay(false);
  };

  const handleFormClick = (e: FormClickEvent): void => {
    // To stop overlay from closing on form element click
    e.stopPropagation();
  };

  const handleTodoInput = (e: InputChangeEvent): void => {
    setTodoContent(e.currentTarget.value);
  };

  return (
    <form onClick={handleFormClick} onSubmit={handleFormSubmit}>
      <input
        aria-label="Edit todo"
        type="text"
        value={todoContent}
        onChange={handleTodoInput}
        autoFocus
      />
      <button type="submit" disabled={!todoContent ? true : false}>
        Edit task
      </button>
    </form>
  );
};
