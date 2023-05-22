import React from "react";

type UIElementState = {
  showOverlay: boolean;
};

type UIContextType = [
  UIElements: UIElementState,
  setUIElements: React.Dispatch<React.SetStateAction<UIElementState>>
];

type UIStateProviderProps = {
  children: JSX.Element;
};

const UIContext = React.createContext<UIContextType>(
  [] as unknown as UIContextType
);

const initialState: UIElementState = {
  showOverlay: false,
};

export const UIStateProvider = ({
  children,
}: UIStateProviderProps): JSX.Element => {
  const [UIElements, setUIElements] =
    React.useState<UIElementState>(initialState);

  return (
    <UIContext.Provider value={[UIElements, setUIElements]}>
      {children}
    </UIContext.Provider>
  );
};

// Hooks
export const useGetOverlay = (): boolean => {
  const [{ showOverlay }] = React.useContext(UIContext);
  return showOverlay;
};

type SetOverlay = (value: boolean) => void;

export const useSetOverlay = (): SetOverlay => {
  const [_, setUIElements] = React.useContext(UIContext);

  return (value: boolean): void => {
    setUIElements((currUIElements: UIElementState): UIElementState => {
      return { ...currUIElements, showOverlay: value };
    });
  };
};
