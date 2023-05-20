import React from "react";

import { CreateTodoForm } from "../features/todos";
import { EditTodoForm } from "../features/todos";
import { TodoList } from "../features/todos";
import { Modal } from "../features/ui";

export const Home = (): JSX.Element => {
  return (
    <>
      <CreateTodoForm placeholderText="Enter a task..." />
      <TodoList />
      <Modal />
      <EditTodoForm />
    </>
  );
};
