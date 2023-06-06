import React from "react";
import { CreateTodoForm } from "../../create-todo-form/create-todo-form";
import { EditTodoForm } from "../../edit-todo-form";
import { TodoList } from "../../todo-list";
import { Overlay, useGetOverlay, useSetOverlay } from "../../../ui";
import { useGetTodoId } from "../../../../pages/page-context";

export const Inbox = () => {
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
