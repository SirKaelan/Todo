import React from "react";
import styles from "./input.module.scss";

import {
  InputBlurEvent,
  InputChangeEvent,
  InputClickEvent,
  InputFocusEvent,
} from "types/eventTypes";

type InputProps = {
  type: "text";
  placeholder?: string;
  value: string;
  onInputChange: (e: InputChangeEvent) => void;
  onInputClick?: (e: InputClickEvent) => void;
  onBlur?: (e: InputBlurEvent) => void;
  onFocus?: (e: InputFocusEvent) => void;
  ariaLabel: string;
  errorMessage: string;
  autoFocus?: boolean;
  name?: string;
  autoComplete?: "on" | "off";
};

export const Input = ({
  type,
  placeholder,
  value,
  onInputChange,
  onInputClick,
  onBlur,
  onFocus,
  ariaLabel,
  errorMessage,
  autoFocus,
  name,
  autoComplete,
}: InputProps): JSX.Element => {
  const inputClasses = () => {
    const classes = [];
    if (type === "text") classes.push(styles.input_text);
    if (errorMessage) classes.push(styles.error_border);
    return classes.join(" ");
  };

  return (
    <>
      <div className={styles.container}>
        <input
          className={inputClasses()}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
          onClick={onInputClick}
          onFocus={onFocus}
          aria-label={ariaLabel}
          autoFocus={autoFocus}
          name={name}
          onBlur={onBlur}
          autoComplete={autoComplete}
        />
        {errorMessage ? (
          <div className={styles.error_message}>{errorMessage}</div>
        ) : null}
      </div>
    </>
  );
};
