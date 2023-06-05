import React from "react";
import styles from "./todos.module.scss";

import { TodoList, CreateTodoForm, EditTodoForm } from "../../features/todos";
import { Overlay, useGetOverlay, useSetOverlay } from "../../features/ui";
import { useGetTodoId } from "../page-context";

export const Home = (): JSX.Element => {
  const showOverlay = useGetOverlay();
  const setOverlay = useSetOverlay();
  const todoId = useGetTodoId();

  return (
    <main className={styles.tasks}>
      <aside className={styles.tasks__nav}>
        <nav>
          <ul>
            <li className={`${styles.tasks__nav__button} selected`}>
              <img className={styles.tasks__nav__icon} src="" alt="" />
              <a className={styles.tasks__nav__text} href="#">
                Inbox
              </a>
              <span className={styles.tasks__nav__number}>1</span>
            </li>

            <li className={styles.tasks__nav__button}>
              <img className={styles.tasks__nav__icon} src="" alt="" />
              <a className={styles.tasks__nav__text} href="#">
                Completed
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <CreateTodoForm placeholderText="Enter a task..." />
      <TodoList />
      {showOverlay && (
        <Overlay setOverlay={setOverlay}>
          <EditTodoForm todoId={todoId} />
        </Overlay>
      )}
    </main>
  );
};
