export enum UIActionType {
  SHOW_OVERLAY = "SHOW_OVERLAY",
  HIDE_OVERLAY = "HIDE_OVERLAY",
}

export type UIAction = {
  type: UIActionType;
};

export type UIState = {
  overlay: boolean;
};

export type UIProviderProps = {
  children: JSX.Element;
};

export type UIContextType =
  | { state: UIState; dispatch: React.Dispatch<UIAction> }
  | undefined;
