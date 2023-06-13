import React from "react";
import styles from "./inbox-view.module.scss";
import { CreateTaskForm, EditTaskForm, TaskList } from "features/tasks";
import { Dialog, useGetOverlay, useSetOverlay } from "features/ui";
// Maybe change to get this id from the Task Context?
import { useGetTaskId } from "pages/page-context";

export const Inbox = (): JSX.Element => {
  const showOverlay = useGetOverlay();
  const setOverlay = useSetOverlay();
  const taskId = useGetTaskId();

  return (
    <>
      <header className={styles.tasks__manager__headerContainer}>
        <h2 className={styles.tasks__manager__headerTitle}>Inbox</h2>
        <CreateTaskForm placeholderText="Enter a task..." />
      </header>
      <section>
        <TaskList />
        <Dialog open={showOverlay} onClose={() => setOverlay(false)}>
          {showOverlay && <EditTaskForm taskId={taskId} />}
        </Dialog>
      </section>
    </>
  );
};
