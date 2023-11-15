import { IconDefinition, IconPack } from "@fortawesome/fontawesome-svg-core";
import { IconNames } from "ui";

export const searchIconPack = (
  iconPack: IconPack,
  iconName: IconNames
): IconDefinition => {
  return Object.entries(iconPack).filter(([key]) => key === iconName)[0][1];
};
