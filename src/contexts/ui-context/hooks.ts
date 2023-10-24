import React from "react";

import { UIContext } from "./ui-context";
import { UIActionType } from "./types";

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
