import React from "react";

import { TodoList } from "../features/todos";

export const Home = (): JSX.Element => {
  return (
    <>
      <div>Home page</div>
      <TodoList />
    </>
  );
};
