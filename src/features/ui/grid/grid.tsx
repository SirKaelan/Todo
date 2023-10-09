import React from "react";
import styles from "./grid.module.scss";

type ColsRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";

type GridProps = {
  // This type makes it possible
  // to accept multiple children
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  cols?: ColsRange;
  spacing?: Spacing;
};

export const Grid = ({
  children,
  container,
  item,
  cols,
  spacing,
}: GridProps): JSX.Element => {
  // Might need a refactor
  const gridClasses = () => {
    const classes = [];
    if (container) classes.push(styles.grid_container);
    if (item) classes.push(styles.grid_item);
    if (cols) classes.push(styles[`grid_cols_${cols}`]);
    if (spacing) classes.push(styles[`grid_spacing_${spacing}`]);
    return classes.join(" ");
  };

  return <div className={gridClasses()}>{children}</div>;
};
