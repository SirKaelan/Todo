import React, { useState } from "react";
import styles from "./task-item.module.scss";

import { Task } from "contexts/task-context";
import { InputClickEvent, ButtonClickEvent } from "types/eventTypes";
import { Button } from "ui";

type TaskItemProps = {
  task: Task;
  onRemove: (e: ButtonClickEvent, task: Task) => void;
  onClick: (task: Task) => void;
};

export const TaskItem = ({
  task,
  onRemove,
  onClick,
}: TaskItemProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (): void => {
    setIsChecked((currIsChecked: boolean): boolean => !currIsChecked);
  };

  const handleCheckboxClick = (e: InputClickEvent) => e.stopPropagation();

  return (
    <li className={styles.task_container} onClick={() => onClick(task)}>
      <input
        className={styles.task_checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        onClick={handleCheckboxClick}
      />
      <p className={`${styles.task_content} ${isChecked && styles.checked}`}>
        {task.content}
      </p>
      <Button color="danger" onClick={(e) => onRemove(e, task)}>
        Remove
      </Button>
    </li>
  );
};
