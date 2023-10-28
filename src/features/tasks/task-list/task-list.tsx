import React from "react";
import styles from "./task-list.module.scss";

type TaskListProps = {
  // Maybe it should be React.ReactNode
  // but i wanted to be more specific with
  // what i can accept
  children: React.ReactElement[];
};

export const TaskList = ({ children }: TaskListProps): JSX.Element => {
  return <ul className={styles.tasks_container}>{children}</ul>;
};
