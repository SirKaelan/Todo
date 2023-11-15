import React from "react";
import { IconNames, IconTypes, IconColors, searchIconPack } from "ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

type IconProps = {
  type: IconTypes;
  name: IconNames;
  color?: IconColors;
  size?: SizeProp;
};

export const Icon = ({ type, name, color, size }: IconProps): JSX.Element => {
  let icon: IconDefinition | undefined = undefined;
  if (type === IconTypes.REGULAR) {
    icon = searchIconPack(far, name);
  } else if (type === IconTypes.SOLID) {
    icon = searchIconPack(fas, name);
  }

  return (
    <FontAwesomeIcon icon={icon as IconDefinition} color={color} size={size} />
  );
};
