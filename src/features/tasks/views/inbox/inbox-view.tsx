import React from "react";
import styles from "./inbox-view.module.scss";
import { CreateTaskForm } from "../../create-task-form/create-task-form";
import { EditTaskForm } from "../../edit-task-form";
import { TaskList } from "../../task-list/task-list";
import { Overlay, useGetOverlay, useSetOverlay } from "../../../ui";
import { useGetTaskId } from "../../../../pages/page-context";

export const Inbox = () => {
  // const showOverlay = useGetOverlay();
  // const setOverlay = useSetOverlay();
  // const taskId = useGetTaskId();

  return (
    <>
      <header className={styles.tasks__manager__headerContainer}>
        <h2 className={styles.tasks__manager__headerTitle}>Inbox</h2>
        <CreateTaskForm placeholderText="Enter a task..." />
      </header>
      <section>
        <TaskList />
      </section>
      {/* {showOverlay && (
        <Overlay setOverlay={setOverlay}>
          <EditTaskForm taskId={taskId} />
        </Overlay>
      )} */}
    </>
  );
};
