import React from "react";
import styles from "./button.module.scss";

type BtnClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

type ButtonProps = {
  color: "primary" | "danger";
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onClick?: (e: BtnClickEvent) => void;
  children: string;
};

export const Button = ({
  color,
  type,
  disabled,
  onClick,
  children,
}: ButtonProps): JSX.Element => {
  const buttonClasses = (): string => {
    const arr: string[] = [styles["btn"]];
    if (color === "primary") arr.push(styles["btn-primary"]);
    if (color === "danger") arr.push(styles["btn-danger"]);

    return arr.join(" ");
  };

  return (
    <button
      className={buttonClasses()}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
