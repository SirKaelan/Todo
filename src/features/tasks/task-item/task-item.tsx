import React from "react";
import styles from "./task-item.module.scss";

import { Task } from "contexts/task-context";
import { InputClickEvent } from "types/eventTypes";
import { Button } from "ui";
import {
  TaskRemoveHandler,
  TaskClickHandler,
  CheckboxChangeHandler,
} from "features/tasks";

type TaskItemProps = {
  task: Task;
  onTaskRemove: TaskRemoveHandler;
  onTaskClick: TaskClickHandler;
  onCheckboxChange: CheckboxChangeHandler;
};

export const TaskItem = ({
  task,
  onTaskRemove,
  onTaskClick,
  onCheckboxChange,
}: TaskItemProps): JSX.Element => {
  const handleCheckboxClick = (e: InputClickEvent) => e.stopPropagation();

  return (
    <li className={styles.task_container} onClick={() => onTaskClick(task)}>
      <input
        className={styles.task_checkbox}
        type="checkbox"
        checked={task.completed}
        onChange={(e) => onCheckboxChange(e, task)}
        onClick={handleCheckboxClick}
      />
      <p
        className={`${styles.task_content} ${task.completed && styles.checked}`}
      >
        {task.content}
      </p>
      <Button color="danger" onClick={(e) => onTaskRemove(e, task)}>
        Remove
      </Button>
    </li>
  );
};
