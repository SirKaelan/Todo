import React from "react";
import ReactDOM from "react-dom";
import "./overlay.css";

type OverlayProps = {
  children: JSX.Element;
  setOverlay: (value: boolean) => void;
};

export const Overlay = ({
  children,
  setOverlay,
}: OverlayProps): React.ReactPortal => {
  const handleOverlayClick = () => setOverlay(false);

  return ReactDOM.createPortal(
    <div className="overlay" onClick={handleOverlayClick}>
      {children}
    </div>,
    document.getElementById("overlay")!
  );
};
