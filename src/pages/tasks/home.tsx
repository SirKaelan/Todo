import React from "react";
import styles from "./tasks.module.scss";
import { Route, Routes } from "react-router-dom";

import { TaskNavigation } from "features/tasks";
import { Inbox } from "features/tasks";
import { Completed } from "features/tasks";
import { Grid } from "features/ui";

// TODO: Remove this (only for testing)
const Box = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const boxStyles = {
    padding: "16px",
    borderRadius: "4px",
    textAlign: "center",
    color: "#ede9f9",
    fontWeight: 700,
    backgroundColor: "#47b0b0",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
  } as const;

  return <div style={boxStyles}>{children}</div>;
};

export const Home = (): JSX.Element => {
  return (
    <>
      <Grid container spacing="sm">
        <Grid item cols={6}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item cols={6}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </>
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
  );
};
