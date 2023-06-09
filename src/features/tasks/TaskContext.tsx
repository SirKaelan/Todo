import React from "react";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  content: string;
};

type TaskContextType = [
  tasks: Task[],
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
];

type TaskProviderProps = {
  children: JSX.Element;
};

const TaskContext = React.createContext<TaskContextType>(
  [] as unknown as TaskContextType
);

export const TaskProvider = ({ children }: TaskProviderProps): JSX.Element => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  return (
    <TaskContext.Provider value={[tasks, setTasks]}>
      {children}
    </TaskContext.Provider>
  );
};

// Hooks
export const useGetTasks = (): Task[] => {
  const [tasks] = React.useContext(TaskContext);
  return tasks;
};

type AddTask = (taskContent: string) => void;

export const useAddTask = (): AddTask => {
  const [_, setTasks] = React.useContext(TaskContext);

  return (taskContent: string): void => {
    const newTask: Task = {
      id: uuidv4(),
      content: taskContent,
    };

    setTasks((currTasks: Task[]): Task[] => [...currTasks, newTask]);
  };
};

type RemoveTask = (id: string) => void;

export const useRemoveTask = (): RemoveTask => {
  const [_, setTasks] = React.useContext(TaskContext);

  return (id: string) => {
    setTasks((currTasks: Task[]): Task[] =>
      currTasks.filter((task: Task) => task.id !== id)
    );
  };
};

type GetTask = (id: string) => Task;

export const useGetTask = (): GetTask => {
  const [tasks] = React.useContext(TaskContext);

  return (id: string): Task => {
    const task: Task = tasks.find((task: Task) => task.id === id) as Task;
    return task;
  };
};

type EditTask = (id: string, content: string) => void;

export const useEditTask = (): EditTask => {
  const [_, setTasks] = React.useContext(TaskContext);

  return (id: string, content: string): void => {
    const newTasks = (currTasks: Task[]): Task[] => {
      const tasks: Task[] = [...currTasks];
      const taskIndex: number = tasks.findIndex((task: Task) => task.id === id);
      const task: Task = tasks[taskIndex];
      tasks[taskIndex] = { ...task, content };
      return tasks;
    };

    setTasks(newTasks);
  };
};
