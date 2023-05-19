import React from "react";

import { useGetTodos } from "./TodoContext";

export const TodoList = (): JSX.Element => {
  const todos = useGetTodos();

  const renderedTodos = todos.map(({ id, content }): JSX.Element => {
    return <div key={id}>{content}</div>;
  });

  return <div>{renderedTodos}</div>;
};
