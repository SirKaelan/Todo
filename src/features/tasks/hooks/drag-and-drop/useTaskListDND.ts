import { Task } from "contexts/task-context";
import {
  DragEndHandler,
  DragEnterHandler,
  DragOverHandler,
  DragStartHandler,
  useTasks,
} from "features/tasks";

type DNDHookReturnType = {
  handleDragStart: DragStartHandler;
  handleDragEnter: DragEnterHandler;
  handleDragOver: DragOverHandler;
  handleDragEnd: DragEndHandler;
};

export const useTaskListDND = (tasks: Task[]): DNDHookReturnType => {
  const Tasks = useTasks();
  let draggedTaskIndex = 0;
  let draggedOverTaskIndex = 0;

  return {
    handleDragStart: (index) => {
      draggedTaskIndex = index;
    },
    handleDragEnter: (index) => {
      draggedOverTaskIndex = index;
    },
    handleDragOver: (e) => {
      e.preventDefault();
    },
    handleDragEnd: () => {
      const newTasks = [...tasks];
      const temp = newTasks[draggedTaskIndex];
      newTasks[draggedTaskIndex] = newTasks[draggedOverTaskIndex];
      newTasks[draggedOverTaskIndex] = temp;
      Tasks.addTasks(newTasks);
    },
  };
};
