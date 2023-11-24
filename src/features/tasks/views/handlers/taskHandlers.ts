import { Task } from "contexts/task-context";
import { useTasks } from "features/tasks";
import { useUI } from "contexts/ui-context";
import { v4 as uuidv4 } from "uuid";
import {
  CheckboxChangeHandler,
  CreateSubmitHandler,
  EditSubmitHandler,
  TaskClickHandler,
  TaskRemoveHandler,
} from "./handlerTypes";

export const useTaskHandlers = () => {
  const Tasks = useTasks();
  const UIState = useUI();

  const handleCreateSubmit: CreateSubmitHandler = (e, taskFormData): void => {
    e.preventDefault();
    const { errors, validateForm } = taskFormData.TaskFormValidator;
    const { isValid } = validateForm(taskFormData.form, null, errors, true);

    const taskInput =
      e.currentTarget.querySelector<HTMLInputElement>("input[type='text']");
    taskInput?.focus();

    if (!isValid) return;

    const newTask: Task = {
      id: uuidv4(),
      content: taskFormData.form.content.trim(),
      completed: false,
    };

    Tasks.add(newTask);
    taskFormData.setForm((prevState) => {
      return { ...prevState, content: "" };
    });
  };

  const handleEditSubmit: EditSubmitHandler = (e, taskFormData, task): void => {
    e.preventDefault();
    const { errors, validateForm } = taskFormData.TaskFormValidator;
    const { isValid } = validateForm(taskFormData.form, null, errors, true);

    const taskInput =
      e.currentTarget.querySelector<HTMLInputElement>("input[type='text']");
    taskInput?.focus();

    if (!isValid) return;

    if (task === undefined)
      throw new Error("'task' prop was not provided to 'TaskForm' component.");

    const editedTask: Task = {
      ...(task as Task),
      content: taskFormData.form.content.trim(),
    };

    Tasks.edit(editedTask);
    UIState.setOverlay("hide");
  };

  const handleTaskClick: TaskClickHandler = (task): void => {
    Tasks.select(task);
    UIState.setOverlay("show");
  };

  const handleRemoveClick: TaskRemoveHandler = (e, task): void => {
    e.stopPropagation();
    Tasks.remove(task);
  };

  const handleCheckboxChange: CheckboxChangeHandler = (e, task): void => {
    if (e.currentTarget.checked) Tasks.complete(task);
    else Tasks.uncomplete(task);
  };

  const handlePopupClose = () => UIState.setOverlay("hide");

  return {
    handleCreateSubmit,
    handleEditSubmit,
    handleTaskClick,
    handleRemoveClick,
    handleCheckboxChange,
    handlePopupClose,
  };
};
