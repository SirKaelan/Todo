import React, { useState } from "react";
import styles from "./task-item.module.scss";
import {
  useTasks,
  Task,
  InputClickEvent,
  ButtonClickEvent,
} from "features/tasks";
import { useUI, Button } from "features/ui";

type TaskItemProps = {
  task: Task;
  setClickedTask: React.Dispatch<React.SetStateAction<Task>>;
};

export const TaskItem = ({
  task,
  setClickedTask,
}: TaskItemProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const Tasks = useTasks();
  const UIState = useUI();

  const handleTaskClick = (): void => {
    setClickedTask(task);
    UIState.setOverlay("show");
  };

  const handleRemoveClick = (e: ButtonClickEvent): void => {
    e.stopPropagation();
    Tasks.remove(task);
  };

  const handleCheckboxChange = (): void => {
    setIsChecked((currIsChecked: boolean): boolean => !currIsChecked);
  };

  const handleCheckboxClick = (e: InputClickEvent) => e.stopPropagation();

  return (
    <li className={styles.task_container} onClick={handleTaskClick}>
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
      <Button color="danger" onClick={handleRemoveClick}>
        Remove
      </Button>
    </li>
  );
};
