// Yoinked from: https://medium.com/software-fast-radius/upgrading-react-testing-librarys-user-event-to-version-14-d3fee658247

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Options } from "@testing-library/user-event/dist/types/options";
import { ReactElement } from "react";

export const setup = (component: ReactElement, options?: Options) => ({
  user: userEvent.setup(options),
  ...render(component),
});
