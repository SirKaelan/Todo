import React from "react";

// Fix names and types
type UIContextType = [
  elements: {},
  setElements: React.Dispatch<React.SetStateAction<{}>>
];

type UIProviderProps = {
  children: JSX.Element;
};

// Create context
const UIContext = React.createContext<UIContextType>(
  [] as unknown as UIContextType
);

// Provider
export const UIProvider = ({ children }: UIProviderProps): JSX.Element => {
  // Name of state - subject to change
  const [elements, setElements] = React.useState({});

  return (
    <UIContext.Provider value={[elements, setElements]}>
      {children}
    </UIContext.Provider>
  );
};

// Hooks
