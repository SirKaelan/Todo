import React from "react";
import styles from "./form.module.scss";

import { FormSubmitEvent } from "features/tasks";

type FormProps = {
  children: React.ReactElement[];
  onFormSubmit?: (e: FormSubmitEvent) => void;
};

export const Form = ({ children, onFormSubmit }: FormProps): JSX.Element => {
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      {children}
    </form>
  );
};
