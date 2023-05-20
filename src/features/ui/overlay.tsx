import React from "react";
import ReactDOM from "react-dom";
import "./overlay.css";

type OverlayProps = {
  children: JSX.Element;
};

export const Overlay = ({ children }: OverlayProps): React.ReactPortal => {
  return ReactDOM.createPortal(
    <div className="overlay">{children}</div>,
    document.getElementById("overlay")!
  );
};
