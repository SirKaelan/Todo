import React from "react";
import styles from "./tasks.module.scss";
import { Route, Routes } from "react-router-dom";

import { TaskNavigation } from "features/tasks";
import { Inbox } from "features/tasks";
import { Completed } from "features/tasks";
import { Grid } from "features/ui";

export const Home = (): JSX.Element => {
  return (
    // <main className={styles.tasks}>
    //   <TaskNavigation />

    //   <article className={styles.tasks__manager}>
    //     <div className={styles.tasks__manager__container}>
    //       <Routes>
    //         <Route index element={<Inbox />} />
    //         <Route path="completed" element={<Completed />} />
    //       </Routes>
    //     </div>
    //   </article>
    // </main>

    <Grid container>
      <Grid item lg={1}>
        <TaskNavigation />
      </Grid>
      <Grid item lg={10}>
        <article className={styles.tasks__manager}>
          <Routes>
            <Route index element={<Inbox />} />
            <Route path="completed" element={<Completed />} />
          </Routes>
        </article>
      </Grid>
    </Grid>
  );
};
