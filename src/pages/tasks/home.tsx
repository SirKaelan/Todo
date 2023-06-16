import React from "react";
import styles from "./tasks.module.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Inbox } from "features/tasks";
import { Completed } from "features/tasks";
import { useTask } from "features/tasks";

export const Home = (): JSX.Element => {
  const { state: tasks } = useTask();

  return (
    <main className={styles.tasks}>
      <BrowserRouter>
        <aside className={styles.tasks__nav}>
          <nav>
            <ul>
              <li className={`${styles.tasks__nav__button} selected`}>
                <Link to="/" className={styles.tasks__nav__text}>
                  Inbox
                </Link>
                <span className={styles.tasks__nav__number}>
                  {tasks.length}
                </span>
              </li>

              <li className={styles.tasks__nav__button}>
                <Link to="/completed" className={styles.tasks__nav__text}>
                  Completed
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <article className={styles.tasks__manager}>
          <div className={styles.tasks__manager__container}>
            <Routes>
              <Route index element={<Inbox />} />
              <Route path="completed" element={<Completed />} />
            </Routes>
          </div>
        </article>
      </BrowserRouter>
    </main>
  );
};
