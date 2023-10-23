import React from "react";
import {
  UIActionType,
  UIAction,
  UIState,
  UIProviderProps,
  UIContextType,
} from "features/tasks";

const uiReducer = (state: UIState, action: UIAction): UIState => {
  switch (action.type) {
    case UIActionType.SHOW_OVERLAY:
      return { ...state, overlay: true };
    case UIActionType.HIDE_OVERLAY:
      return { ...state, overlay: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const INITIAL_STATE: UIState = {
  overlay: false,
};

const UIContext = React.createContext<UIContextType>(undefined);

export const UIProvider = ({ children }: UIProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(uiReducer, INITIAL_STATE);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = React.useContext(UIContext);

  if (context === undefined)
    throw new Error("useUI must be used with a UIProvider");

  const { state, dispatch } = context;

  const setOverlay = (action: "show" | "hide") => {
    if (action === "show") dispatch({ type: UIActionType.SHOW_OVERLAY });
    else if (action === "hide") dispatch({ type: UIActionType.HIDE_OVERLAY });
    else throw new Error("Unrecognized action value for 'overlay'.");
  };

  return { state, setOverlay };
};
