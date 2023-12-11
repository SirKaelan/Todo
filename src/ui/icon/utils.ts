import { IconDefinition, IconPack } from "@fortawesome/fontawesome-svg-core";
import { IconNames } from "ui";

export const searchIconPack = (
  iconPack: IconPack,
  iconName: IconNames
): IconDefinition | undefined => {
  const icon = Object.entries(iconPack).filter(([key]) => key === iconName);

  return icon.length === 0 ? undefined : icon[0][1];
};
