import React from "react";
import styles from "./task-list.module.scss";
import { useTasks, TaskItem, Task } from "features/tasks";

type TaskListProps = {
  setClickedTask: React.Dispatch<React.SetStateAction<Task>>;
};

export const TaskList = ({ setClickedTask }: TaskListProps): JSX.Element => {
  const Tasks = useTasks();

  const renderedTasks = Tasks.state.map((task): JSX.Element => {
    return (
      <TaskItem key={task.id} task={task} setClickedTask={setClickedTask} />
    );
  });

  return (
    <ul className={styles.tasks__manager__tasksContainer}>{renderedTasks}</ul>
  );
};
