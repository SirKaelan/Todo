import { useTaskState, Task } from "contexts/task-context";
import { useLocalStorage, isLocalStorageEnabled } from "services/localStorage";

export const useTasks = () => {
  const STORAGE_KEY = "tasks";
  const TaskState = useTaskState();
  const LS = useLocalStorage();
  const tasks = TaskState.tasks;
  const selectedTask = TaskState.selectedTask;
  const completed = TaskState.completed;
  const uncompleted = TaskState.uncompleted;

  return {
    tasks,
    selectedTask,
    completed,
    uncompleted,
    add: (payload: Task) => {
      TaskState.add(payload);
      LS.pushItem<Task>(STORAGE_KEY, payload);
    },
    edit: (payload: Task) => {
      TaskState.edit(payload);
      LS.editItem<Task>(STORAGE_KEY, payload);
    },
    remove: (payload: Task) => {
      TaskState.remove(payload);
      LS.removeItem<Task>(STORAGE_KEY, payload);
    },
    complete: (payload: Task) => {
      TaskState.complete(payload);
      payload.completed = true;
      LS.editItem<Task>(STORAGE_KEY, { ...payload, completed: true });
    },
    uncomplete: (payload: Task) => {
      TaskState.uncomplete(payload);
      LS.editItem<Task>(STORAGE_KEY, { ...payload, completed: false });
    },
    select: (payload: Task) => {
      TaskState.select(payload);
    },
    addTasks: (payload: Task[]) => {
      TaskState.addTasks(payload);
      LS.addItems<Task[]>(STORAGE_KEY, payload);
    },
    syncTasks: () => {
      if (isLocalStorageEnabled())
        console.error("Local storage is not available!");
      const tasks = LS.getItems<Task[]>(STORAGE_KEY);
      if (!tasks) {
        LS.addItems<[]>(STORAGE_KEY, []);
        return;
      } else if (tasks.length === 0) return;
      TaskState.addTasks(tasks);
    },
  };
};
