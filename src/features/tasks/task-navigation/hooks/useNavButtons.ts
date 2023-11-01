import { NavigationButton, useTasks } from "features/tasks";

export const useNavButtons = (): NavigationButton[] => {
  const Tasks = useTasks();

  return [
    { label: "inbox", taskCount: Tasks.completed.length },
    { label: "completed", taskCount: Tasks.uncompleted.length },
  ];
};
