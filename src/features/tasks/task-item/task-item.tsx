import React, { useState } from "react";
import styles from "./task-item.module.scss";
import { useRemoveTask } from "features/tasks/TaskContext";
import { useSetTaskId } from "pages";
import { useSetOverlay } from "features/ui";

type TaskItemProps = {
  id: string;
  content: string;
};

type InputClickEvent = React.MouseEvent<HTMLInputElement, MouseEvent>;
type RemoveBtnClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const TaskItem = ({ id, content }: TaskItemProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const removeTask = useRemoveTask();
  const setTaskId = useSetTaskId();
  const setOverlay = useSetOverlay();

  const handleTaskClick = (): void => {
    setTaskId(id);
    setOverlay(true);
  };

  const handleCheckboxChange = (): void => {
    setIsChecked((currIsChecked: boolean): boolean => !currIsChecked);
  };

  const handleCheckboxClick = (e: InputClickEvent) => e.stopPropagation();

  const handleRemoveClick = (e: RemoveBtnClickEvent): void => {
    e.stopPropagation();
    removeTask(id);
  };

  return (
    <li
      className={styles.tasks__manager__taskContainer}
      onClick={handleTaskClick}
    >
      <input
        className={styles.tasks__manager__checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        onClick={handleCheckboxClick}
      />
      <p className={styles.tasks__manager__taskContent}>{content}</p>
      <button onClick={handleRemoveClick}>Remove</button>
    </li>
  );
};
