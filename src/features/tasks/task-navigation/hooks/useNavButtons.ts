import { NavigationButton, useTasks } from "features/tasks";
import { IconNames, IconTypes, IconColors, IconSizes } from "ui";

export const useNavButtons = (): NavigationButton[] => {
  const Tasks = useTasks();

  return [
    {
      label: "inbox",
      taskCount: Tasks.uncompleted.length,
      icon: {
        type: IconTypes.SOLID,
        name: IconNames.INBOX,
        color: IconColors.GRAY,
        size: IconSizes.EXTRA_LARGE,
      },
    },
    {
      label: "completed",
      taskCount: Tasks.completed.length,
      icon: {
        type: IconTypes.SOLID,
        name: IconNames.SQUARECHECK,
        color: IconColors.GRAY,
        size: IconSizes.EXTRA_LARGE,
      },
    },
  ];
};
