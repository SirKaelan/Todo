import { UIAction, UIActionType, UIState } from "./types";

export const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case UIActionType.SHOW_OVERLAY:
      return { ...state, overlay: true };
    case UIActionType.HIDE_OVERLAY:
      return { ...state, overlay: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
