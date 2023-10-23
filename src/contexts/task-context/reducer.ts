import { TaskAction, TaskActionType, TaskState } from "./types";

export const taskReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  const { payload } = action;

  switch (action.type) {
    case TaskActionType.ADD_TASK:
      return [...state, payload];
    case TaskActionType.EDIT_TASK:
      return state.map((task) => (task.id === payload.id ? payload : task));
    case TaskActionType.REMOVE_TASK:
      return state.filter((task) => task.id !== payload.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
