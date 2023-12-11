import React from "react";

import { UIState, UIProviderProps, UIContextType } from "./types";
import { uiReducer } from "./reducer";

const INITIAL_STATE: UIState = {
  overlay: false,
};

export const UIContext = React.createContext<UIContextType>(undefined);

export const UIProvider = ({ children }: UIProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(uiReducer, INITIAL_STATE);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};
