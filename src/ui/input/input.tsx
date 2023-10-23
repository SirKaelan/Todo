import React from "react";
import styles from "./input.module.scss";

import { InputChangeEvent } from "types/eventTypes";

type InputProps = {
  type: "text";
  placeholder?: string;
  value: string;
  onInputChange: (e: InputChangeEvent) => void;
  ariaLabel: string;
  autoFocus?: boolean;
};

export const Input = ({
  type,
  placeholder,
  value,
  onInputChange,
  ariaLabel,
  autoFocus,
}: InputProps): JSX.Element => {
  const inputClasses = () => {
    const classes = [];
    if (type === "text") classes.push(styles.input_text);
    return classes.join(" ");
  };

  return (
    <input
      className={inputClasses()}
      placeholder={placeholder}
      value={value}
      onChange={onInputChange}
      aria-label={ariaLabel}
      autoFocus={autoFocus}
    />
  );
};
