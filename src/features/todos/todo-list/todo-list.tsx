import React from "react";
import styles from "./todo-list.module.scss";
import { useGetTodos } from "../TodoContext";
import { TodoItem } from "../todo-item/todo-item";

export const TodoList = (): JSX.Element => {
  const todos = useGetTodos();

  const renderedTodos = todos.map(({ id, content }): JSX.Element => {
    return <TodoItem key={id} id={id} content={content} />;
  });

  return (
    <ul className={styles.tasks__manager__tasksContainer}>{renderedTodos}</ul>
  );
};
