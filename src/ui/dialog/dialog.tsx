import React, { useEffect, useRef } from "react";
import styles from "./dialog.module.scss";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: JSX.Element | boolean | string;
};

type DialogClickEvent = React.MouseEvent<HTMLDialogElement, MouseEvent>;

export const Dialog = ({
  open,
  onClose,
  children,
}: DialogProps): JSX.Element => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const dialogClasses = (): string => {
    const classes: string[] = [styles.dialog];
    if (!open) classes.push(styles.closed);
    return classes.join(" ");
  };

  const handleDialogClick = ({ target }: DialogClickEvent): void => {
    const { current: dialogEl } = dialogRef;
    if (target === dialogEl) onClose();
  };

  useEffect(() => {
    const { current: dialogEl } = dialogRef;
    if (open) dialogEl?.showModal();
    else dialogEl?.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={dialogClasses()}
      onClick={handleDialogClick}
    >
      {children}
    </dialog>
  );
};
