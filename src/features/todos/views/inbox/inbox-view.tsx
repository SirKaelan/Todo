import React from "react";
import styles from "./inbox-view.module.scss";
import { CreateTodoForm } from "../../create-todo-form/create-todo-form";
import { EditTodoForm } from "../../edit-todo-form";
import { TodoList } from "../../todo-list/todo-list";
import { Overlay, useGetOverlay, useSetOverlay } from "../../../ui";
import { useGetTodoId } from "../../../../pages/page-context";

export const Inbox = () => {
  // const showOverlay = useGetOverlay();
  // const setOverlay = useSetOverlay();
  // const todoId = useGetTodoId();

  return (
    <>
      <header className={styles.tasks__manager__headerContainer}>
        <h2 className={styles.tasks__manager__headerTitle}>Inbox</h2>
        <CreateTodoForm placeholderText="Enter a task..." />
      </header>
      <section>
        <TodoList />
      </section>
      {/* {showOverlay && (
        <Overlay setOverlay={setOverlay}>
          <EditTodoForm todoId={todoId} />
        </Overlay>
      )} */}
    </>
  );
};
