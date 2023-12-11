import React from "react";
import {
  IconNames,
  IconTypes,
  IconColors,
  IconSizes,
  searchIconPack,
} from "ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

export type IconProps = {
  type: IconTypes;
  name: IconNames;
  color?: IconColors;
  size?: IconSizes;
};

export const Icon = ({
  type,
  name,
  color,
  size,
}: IconProps): JSX.Element | null => {
  let icon: IconDefinition | undefined = undefined;
  if (type === IconTypes.REGULAR) {
    icon = searchIconPack(far, name);
  } else if (type === IconTypes.SOLID) {
    icon = searchIconPack(fas, name);
  }

  return icon === undefined ? null : (
    <FontAwesomeIcon icon={icon} color={color} size={size} />
  );
};
