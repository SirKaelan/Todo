import React from "react";
import styles from "./grid.module.scss";

type ColsRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";
type JustifyContent = "start" | "center" | "end" | "space-between";
type AlignItems = "start" | "center" | "end";

type GridProps = {
  // This type makes it possible
  // to accept multiple children
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: ColsRange;
  sm?: ColsRange;
  md?: ColsRange;
  lg?: ColsRange;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
};

export const Grid = ({
  children,
  container,
  item,
  xs,
  sm,
  md,
  lg,
  spacing,
  justifyContent,
  alignItems,
}: GridProps): JSX.Element => {
  // Might need a refactor
  const gridClasses = () => {
    const classes: string[] = [];
    if (container) classes.push(styles.grid_container);
    if (item) classes.push(styles.grid_item);
    if (xs) classes.push(styles[`grid_xs_${xs}`]);
    if (sm) classes.push(styles[`grid_sm_${sm}`]);
    if (md) classes.push(styles[`grid_md_${md}`]);
    if (lg) classes.push(styles[`grid_lg_${lg}`]);
    if (spacing) classes.push(styles[`grid_spacing_${spacing}`]);
    if (justifyContent)
      classes.push(styles[`grid_justifyContent_${justifyContent}`]);
    if (alignItems) classes.push(styles[`grid_alignItems_${alignItems}`]);
    return classes.join(" ");
  };

  return <div className={gridClasses()}>{children}</div>;
};
