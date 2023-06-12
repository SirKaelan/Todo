import React, { useEffect, useRef } from "react";
import styles from "./dialog.module.scss";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: JSX.Element | boolean;
};

type DialogClickEvent = React.MouseEvent<HTMLDialogElement, MouseEvent>;

export const Dialog = ({
  open,
  onClose,
  children,
}: DialogProps): JSX.Element => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  console.log(open);

  const dialogClasses = () => {
    const arr: string[] = [styles["overlay"]];
    if (!open) arr.push(styles["overlay--closed"]);

    return arr.join(" ");
  };

  const handleDialogClick = ({ target }: DialogClickEvent): void => {
    const { current: dialogEl } = dialogRef;

    if (target === dialogEl) onClose();
  };

  const handleDialogAnimEnd = (): void => {
    const { current: dialogEl } = dialogRef;
    if (!open) dialogEl?.close();
  };

  useEffect(() => {
    const { current: dialogEl } = dialogRef;
    if (open) dialogEl?.showModal();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={dialogClasses()}
      onClick={handleDialogClick}
      onAnimationEnd={handleDialogAnimEnd}
    >
      {children}
    </dialog>
  );
};
