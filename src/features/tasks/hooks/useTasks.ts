import { useTaskState, Task } from "contexts/task-context";
import { useLocalStorage } from "services/localStorage";

export const useTasks = () => {
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
      LS.addTask(payload);
    },
    edit: (payload: Task) => {
      TaskState.edit(payload);
      LS.editTask(payload);
    },
    remove: (payload: Task) => {
      TaskState.remove(payload);
      LS.removeTask(payload);
    },
    complete: (payload: Task) => {
      TaskState.complete(payload);
      LS.completeTask(payload);
    },
    uncomplete: (payload: Task) => {
      TaskState.uncomplete(payload);
      LS.uncompleteTask(payload);
    },
    select: (payload: Task) => {
      TaskState.select(payload);
    },
    addTasks: (payload: Task[]) => {
      TaskState.addTasks(payload);
      LS.addTasks(payload);
    },
  };
};
