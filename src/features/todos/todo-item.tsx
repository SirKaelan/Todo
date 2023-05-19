import React from "react";

type TodoItemProps = {
  id: string;
  content: string;
};

export const TodoItem = ({ id, content }: TodoItemProps): JSX.Element => {
  return (
    <div>
      <span>{content}</span>
      <button>Delete</button>
    </div>
  );
};
