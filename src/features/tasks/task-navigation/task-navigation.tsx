import React from "react";
import styles from "./task-navigation.module.scss";

import { useTask } from "features/tasks";
import { Link, useLocation } from "react-router-dom";

const capitalizeFirstLetter = (text: string): string => {
  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);
  return firstLetter.toUpperCase() + restOfText;
};

export const TaskNavigation = (): JSX.Element => {
  const { state: tasks } = useTask();
  const location = useLocation();

  // Maybe i should get this from props
  const navBtns = [
    { id: "1", btnText: "inbox", state: tasks },
    { id: "2", btnText: "completed", state: [] },
  ];

  const renderedNavBtns = navBtns.map((navBtn) => {
    const endpoint = navBtn.btnText === "inbox" ? "/" : `/${navBtn.btnText}`;
    return (
      <li
        key={navBtn.id}
        className={`${styles["nav__button"]} ${
          location.pathname === endpoint && "selected"
        }`}
      >
        <Link to={endpoint} className={styles["nav__text"]}>
          {capitalizeFirstLetter(navBtn.btnText)}
        </Link>
        <span className={styles["nav__number"]}>{navBtn.state.length}</span>
      </li>
    );
  });

  return (
    <aside className={styles["nav"]}>
      <nav>
        <ul>{renderedNavBtns}</ul>
      </nav>
    </aside>
  );
};
