import React from "react";

import { TodoList, CreateTodoForm, EditTodoForm } from "../features/todos";
import { Overlay, useGetOverlay, useSetOverlay } from "../features/ui";
import { useGetTodoId } from "./page-context";

export const Home = (): JSX.Element => {
  const showOverlay = useGetOverlay();
  const setOverlay = useSetOverlay();
  const todoId = useGetTodoId();

  return (
    <>
      <CreateTodoForm placeholderText="Enter a task..." />
      <TodoList />
      {showOverlay && (
        <Overlay setOverlay={setOverlay}>
          <EditTodoForm todoId={todoId} />
        </Overlay>
      )}
    </>
  );
};
