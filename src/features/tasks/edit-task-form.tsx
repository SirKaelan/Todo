import React, { useEffect, useState } from "react";
import { useTask } from "features/tasks/COPY-TaskContext";
import {
  ActionType,
  FormSubmitEvent,
  InputChangeEvent,
  Task,
} from "features/tasks/types";
import { useSetOverlay } from "features/ui";

type EditTaskProps = {
  task: Task;
};
// Extract these types to external file
type FormClickEvent = React.MouseEvent<HTMLFormElement, MouseEvent>;

export const EditTaskForm = ({ task }: EditTaskProps): JSX.Element => {
  const [taskContent, setTaskContent] = useState<string>("");

  const { dispatch } = useTask();
  const setOverlay = useSetOverlay();

  useEffect(() => {
    setTaskContent(task.content);
  }, [task]);

  const handleFormSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();

    const newTask: Task = {
      ...task,
      content: taskContent,
    };

    dispatch({ type: ActionType.EDIT_TASK, payload: newTask });
    setOverlay(false);
  };

  const handleFormClick = (e: FormClickEvent): void => {
    // To stop overlay from closing on form element click
    e.stopPropagation();
  };

  const handleTaskInput = (e: InputChangeEvent): void => {
    setTaskContent(e.currentTarget.value);
  };

  return (
    <form onClick={handleFormClick} onSubmit={handleFormSubmit}>
      <input
        aria-label="Edit task"
        type="text"
        value={taskContent}
        onChange={handleTaskInput}
        autoFocus
      />
      <button type="submit" disabled={!taskContent ? true : false}>
        Edit task
      </button>
    </form>
  );
};
