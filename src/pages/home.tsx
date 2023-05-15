import React from "react";

import { CreateTodoForm } from "../features/todos/create-todo-form";

export const Home = (): JSX.Element => {
  return (
    <>
      <CreateTodoForm placeholderText="Enter a task..." />
    </>
  );
};
