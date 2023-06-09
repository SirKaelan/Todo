import React from "react";
import styles from "./task-list.module.scss";
import { useGetTasks } from "../TaskContext";
import { TaskItem } from "../task-item/task-item";

export const TaskList = (): JSX.Element => {
  const tasks = useGetTasks();

  const renderedTasks = tasks.map(({ id, content }): JSX.Element => {
    return <TaskItem key={id} id={id} content={content} />;
  });

  return (
    <ul className={styles.tasks__manager__tasksContainer}>{renderedTasks}</ul>
  );
};
