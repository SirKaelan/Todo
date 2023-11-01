import { TaskAction, TaskActionType, TaskState } from "./types";

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case TaskActionType.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case TaskActionType.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case TaskActionType.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    case TaskActionType.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: true } : task
        ),
      };
    case TaskActionType.UNCOMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, completed: false } : task
        ),
      };
    case TaskActionType.SELECT_TASK:
      return { ...state, selectedTask: action.payload };
    case TaskActionType.ADD_TASKS:
      return { ...state, tasks: action.payload };
    default:
      throw new Error(`Unhandled action type!`);
  }
};
