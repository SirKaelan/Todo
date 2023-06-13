import React, { useState } from "react";
import { useGetTask, useEditTask } from "features/tasks/TaskContext";
import { useSetOverlay } from "features/ui";

type EditTaskProps = {
  taskId: string;
};
// Extract these types to external file
type FormSubmitEvent = React.FormEvent<HTMLFormElement>;
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FormClickEvent = React.MouseEvent<HTMLFormElement, MouseEvent>;

export const EditTaskForm = ({ taskId }: EditTaskProps): JSX.Element => {
  const task = useGetTask()(taskId);
  const editTask = useEditTask();
  const setOverlay = useSetOverlay();

  // Not sure if setting the initial state like this is ideal
  const [taskContent, setTaskContent] = useState<string>(task.content);

  const handleFormSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
    editTask(taskId, taskContent);
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
