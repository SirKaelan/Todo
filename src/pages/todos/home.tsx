import React from "react";
import styles from "./todos.module.scss";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Inbox } from "../../features/todos";
import { Completed } from "../../features/todos";

export const Home = (): JSX.Element => {
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
                <span className={styles.tasks__nav__number}>1</span>
              </li>

              <li className={styles.tasks__nav__button}>
                <Link to="/completed" className={styles.tasks__nav__text}>
                  Completed
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <section>
          <Routes>
            <Route index element={<Inbox />} />
            <Route path="completed" element={<Completed />} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>
  );
};
