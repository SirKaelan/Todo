import React from "react";
import { useGetTodos } from "./TodoContext";
import { TodoItem } from "./todo-item";

export const TodoList = (): JSX.Element => {
  const todos = useGetTodos();

  const renderedTodos = todos.map(({ id, content }): JSX.Element => {
    return <TodoItem key={id} id={id} content={content} />;
  });

  return <div>{renderedTodos}</div>;
};
