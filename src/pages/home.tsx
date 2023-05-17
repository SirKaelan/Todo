import React from "react";

import { CreateTodoForm } from "../features/todos";
import { TodoList } from "../features/todos";

export const Home = (): JSX.Element => {
  return (
    <>
      <CreateTodoForm placeholderText="Enter a task..." />
      <TodoList />
    </>
  );
};
