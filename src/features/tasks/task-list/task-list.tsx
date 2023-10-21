import React from "react";

type TaskListProps = {
  // Maybe it should be React.ReactNode
  // but i wanted to be more specific with
  // what i can accept
  children: React.ReactElement[];
};

export const TaskList = ({ children }: TaskListProps): JSX.Element => {
  return <ul>{children}</ul>;
};
