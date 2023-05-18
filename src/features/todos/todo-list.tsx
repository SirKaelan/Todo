import React from "react";

import { useGetTodos } from "./TodoContext";

export const TodoList = (): JSX.Element => {
  const todos = useGetTodos();

  const renderedTodos = todos.map((todo): JSX.Element => {
    return <div>{todo.content}</div>;
  });

  return <div>{renderedTodos}</div>;
};
