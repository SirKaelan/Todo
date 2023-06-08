import React from "react";
import styles from "./todo-item.module.scss";
import { useRemoveTodo } from "../TodoContext";
import { useSetTodoId } from "../../../pages";
import { useSetOverlay } from "../../ui";

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
    <li className={styles.tasks__manager__taskContainer}>
      <input className={styles.tasks__manager__checkbox} type="checkbox" />
      <p className={styles.tasks__manager__taskContent}>{content}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleRemoveClick}>Remove</button>
    </li>
  );
};
