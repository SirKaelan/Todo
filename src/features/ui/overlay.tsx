import React from "react";
import ReactDOM from "react-dom";
import "./overlay.css";

type OverlayProps = {
  children: JSX.Element;
  hideOverlay: () => void;
};

export const Overlay = ({
  children,
  hideOverlay,
}: OverlayProps): React.ReactPortal => {
  return ReactDOM.createPortal(
    <div className="overlay" onClick={hideOverlay}>
      {children}
    </div>,
    document.getElementById("overlay")!
  );
};
