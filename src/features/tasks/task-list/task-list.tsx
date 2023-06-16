import React from "react";
import styles from "./task-list.module.scss";
// import { useGetTasks } from "../TaskContext";
import { useTask, TaskItem } from "features/tasks";
import { Task } from "features/tasks/types";

type TaskListProps = {
  setClickedTask: React.Dispatch<React.SetStateAction<Task>>;
};

export const TaskList = ({ setClickedTask }: TaskListProps): JSX.Element => {
  const { state: tasks } = useTask();

  const renderedTasks = tasks.map((task): JSX.Element => {
    return (
      <TaskItem key={task.id} task={task} setClickedTask={setClickedTask} />
    );
  });

  return (
    <ul className={styles.tasks__manager__tasksContainer}>{renderedTasks}</ul>
  );
};
