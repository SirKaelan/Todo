import React from "react";
import styles from "./task-item.module.scss";

import { Task } from "contexts/task-context";
import { InputClickEvent } from "types/eventTypes";
import { Icon, IconColors, IconNames, IconTypes, IconSizes } from "ui";
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
  onDragStart?: (e: React.DragEvent<HTMLLIElement>) => void;
  onDragEnter?: (e: React.DragEvent<HTMLLIElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLLIElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLLIElement>) => void;
};

export const TaskItem = ({
  task,
  onTaskRemove,
  onTaskClick,
  onCheckboxChange,
  onDragStart,
  onDragEnter,
  onDragOver,
  onDragEnd,
}: TaskItemProps): JSX.Element => {
  const handleCheckboxClick = (e: InputClickEvent) => e.stopPropagation();

  return (
    <li
      className={styles.task_container}
      onClick={() => onTaskClick(task)}
      draggable="true"
      onDragStart={onDragStart}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <div className={styles.task_checkbox_container}>
        <input
          className={styles.task_checkbox_item}
          type="checkbox"
          checked={task.completed}
          onChange={(e) => onCheckboxChange(e, task)}
          onClick={handleCheckboxClick}
        />
      </div>
      <p
        className={`${styles.task_content} ${task.completed && styles.checked}`}
      >
        {task.content}
      </p>
      <span
        className={styles.task_removeButton}
        onClick={(e) => onTaskRemove(e, task)}
      >
        <Icon
          type={IconTypes.SOLID}
          name={IconNames.XMARK}
          color={IconColors.LIGHT_GRAY}
          size={IconSizes.EXTRA_LARGE}
        />
      </span>
    </li>
  );
};
