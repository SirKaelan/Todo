import React from "react";
import { useRemoveTodo } from "./TodoContext";
import { useSetTodoId } from "../../pages";
import { useSetOverlay } from "../ui";

type TodoItemProps = {
  id: string;
  content: string;
};

export const TodoItem = ({ id, content }: TodoItemProps): JSX.Element => {
  const removeTodo = useRemoveTodo();
  const setTodoId = useSetTodoId();
  const setOverlay = useSetOverlay();

  const handleEditClick = (): void => {
    setTodoId(id);
    setOverlay(true);
  };

  const handleRemoveClick = (): void => removeTodo(id);

  return (
    <div>
      <span>{content}</span>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};
