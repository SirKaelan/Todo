import React from "react";
import styles from "./header.module.scss";

type HeaderProps = {
  children?: React.ReactNode;
  content: string;
};

export const Header = ({ children, content }: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header_container}>
      <h2 className={styles.header_title}>{content}</h2>
      {children}
    </header>
  );
};
