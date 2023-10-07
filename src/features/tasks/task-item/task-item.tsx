import React, { useState } from "react";
import styles from "./task-item.module.scss";
import { useTasks, Task } from "features/tasks";
import { useSetOverlay, Button } from "features/ui";

type TaskItemProps = {
  task: Task;
  setClickedTask: React.Dispatch<React.SetStateAction<Task>>;
};

type InputClickEvent = React.MouseEvent<HTMLInputElement, MouseEvent>;
type BtnClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const TaskItem = ({
  task,
  setClickedTask,
}: TaskItemProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const Tasks = useTasks();
  const setOverlay = useSetOverlay();

  const handleTaskClick = (): void => {
    setClickedTask(task);
    setOverlay(true);
  };

  const handleCheckboxChange = (): void => {
    setIsChecked((currIsChecked: boolean): boolean => !currIsChecked);
  };

  const handleCheckboxClick = (e: InputClickEvent) => e.stopPropagation();

  const handleRemoveClick = (e: BtnClickEvent): void => {
    e.stopPropagation();
    Tasks.remove(task);
  };

  return (
    <li className={styles["task-container"]} onClick={handleTaskClick}>
      <input
        className={styles["task-checkbox"]}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        onClick={handleCheckboxClick}
      />
      <p
        className={`${styles["task-content"]} ${
          isChecked && styles["checked"]
        }`}
      >
        {task.content}
      </p>
      <Button color="danger" onClick={handleRemoveClick}>
        Remove
      </Button>
    </li>
  );
};
