import { NavigationButton, useTasks } from "features/tasks";
import { IconNames, IconTypes, IconColors } from "ui";

export const useNavButtons = (): NavigationButton[] => {
  const Tasks = useTasks();

  return [
    {
      label: "inbox",
      taskCount: Tasks.completed.length,
      icon: {
        type: IconTypes.SOLID,
        name: IconNames.INBOX,
        color: IconColors.BLACK,
        size: "xl",
      },
    },
    {
      label: "completed",
      taskCount: Tasks.uncompleted.length,
      icon: {
        type: IconTypes.SOLID,
        name: IconNames.SQUARECHECK,
        color: IconColors.BLACK,
        size: "xl",
      },
    },
  ];
};
