import { TaskAction, TaskActionType, TaskState } from "./types";

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  const { payload } = action;

  switch (action.type) {
    case TaskActionType.ADD_TASK:
      return { ...state, tasks: [...state.tasks, payload] };
    case TaskActionType.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? payload : task
        ),
      };
    case TaskActionType.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== payload.id),
      };
    case TaskActionType.COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, completed: true } : task
        ),
      };
    case TaskActionType.UNCOMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === payload.id ? { ...task, completed: false } : task
        ),
      };
    case TaskActionType.SELECT_TASK:
      return { ...state, selectedTask: payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
