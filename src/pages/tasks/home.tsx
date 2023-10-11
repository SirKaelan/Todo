import React from "react";
import styles from "./tasks.module.scss";
import { Route, Routes } from "react-router-dom";

import { TaskNavigation } from "features/tasks";
import { Inbox } from "features/tasks";
import { Completed } from "features/tasks";
import { Grid } from "features/ui";

export const Home = (): JSX.Element => {
  return (
    // One time use for fun
    <Grid container>
      <Grid item md={2} lg={1}>
        <TaskNavigation />
      </Grid>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <article className={styles.tasks__manager}>
          <div className={styles.tasks__manager__container}>
            <Routes>
              <Route index element={<Inbox />} />
              <Route path="completed" element={<Completed />} />
            </Routes>
          </div>
        </article>
      </Grid>
    </Grid>
  );
};
