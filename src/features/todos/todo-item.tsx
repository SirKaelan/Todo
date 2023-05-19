import React from "react";
import { useRemoveTodo } from "./TodoContext";

type TodoItemProps = {
  id: string;
  content: string;
};

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const TodoItem = ({ id, content }: TodoItemProps): JSX.Element => {
  const removeTodo = useRemoveTodo();

  const handleRemoveClick = (e: ClickEvent): void => removeTodo(id);

  return (
    <div>
      <span>{content}</span>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};
