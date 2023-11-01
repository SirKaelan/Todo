import { Task } from "contexts/task-context";

// TODO: Need to properly type this
export const useLocalStorage = () => {
  const { localStorage: ls } = window;
  const tasksKey = "tasks";
  const prevTasks: Task[] = JSON.parse(ls.getItem(tasksKey) as string);

  return {
    addTasks: (tasks: Task[]) => ls.setItem(tasksKey, JSON.stringify(tasks)),
    getTasks: () => JSON.parse(ls.getItem(tasksKey) as string),
    addTask: (task: Task) =>
      ls.setItem(tasksKey, JSON.stringify([...prevTasks, task])),
    removeTask: (task: Task) =>
      ls.setItem(
        tasksKey,
        JSON.stringify(prevTasks.filter((prevTask) => prevTask.id !== task.id))
      ),
    editTask: (task: Task) =>
      ls.setItem(
        tasksKey,
        JSON.stringify(
          prevTasks.map((prevTask) =>
            prevTask.id === task.id ? task : prevTask
          )
        )
      ),
    completeTask: (task: Task) =>
      ls.setItem(
        tasksKey,
        JSON.stringify(
          prevTasks.map((prevTask) =>
            prevTask.id === task.id ? { ...task, completed: true } : prevTask
          )
        )
      ),
    uncompleteTask: (task: Task) =>
      ls.setItem(
        tasksKey,
        JSON.stringify(
          prevTasks.map((prevTask) =>
            prevTask.id === task.id ? { ...task, completed: false } : prevTask
          )
        )
      ),
  };
};
