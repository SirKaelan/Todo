import React, { useState, useEffect } from "react";
import styles from "./popup.module.scss";

type PopupProps = {
  children: JSX.Element;
  show: boolean;
  close: () => void;
};
type PopupReturn = JSX.Element | null;
type DivClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export const Popup = ({ children, show, close }: PopupProps): PopupReturn => {
  const [shouldRender, setRender] = useState<boolean>(false);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const popupClasses = () => {
    const classes = [styles.popup];
    if (show) classes.push(styles.show);
    else {
      classes.push(styles.hide);
    }
    return classes.join(" ");
  };

  const handlePopupClick = (e: DivClickEvent): void => {
    if (e.target !== e.currentTarget) return;
    close();
  };

  // This is how you delay your component
  // so your transition can end before unmounting
  // You have to use local state for this to work
  const handleTransitionEnd = () => {
    if (!show) setRender(false);
  };

  return shouldRender ? (
    <div
      className={popupClasses()}
      onClick={handlePopupClick}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  ) : null;
};
