import React from "react";
import styles from "./task-item.module.scss";
import { useRemoveTask } from "../TaskContext";
import { useSetTaskId } from "../../../pages";
import { useSetOverlay } from "../../ui";

type TaskItemProps = {
  id: string;
  content: string;
};

export const TaskItem = ({ id, content }: TaskItemProps): JSX.Element => {
  const removeTask = useRemoveTask();
  const setTaskId = useSetTaskId();
  const setOverlay = useSetOverlay();

  const handleEditClick = (): void => {
    setTaskId(id);
    setOverlay(true);
  };

  const handleRemoveClick = (): void => removeTask(id);

  return (
    <li className={styles.tasks__manager__taskContainer}>
      <input className={styles.tasks__manager__checkbox} type="checkbox" />
      <p className={styles.tasks__manager__taskContent}>{content}</p>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleRemoveClick}>Remove</button>
    </li>
  );
};
