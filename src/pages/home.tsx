import React from "react";

import { CreateTodoForm } from "../features/todos";
import { EditTodoForm } from "../features/todos";
import { TodoList } from "../features/todos";
import { Overlay } from "../features/ui";

export const Home = (): JSX.Element => {
  const [show, setShow] = React.useState<boolean>(false);

  const showOverlay = () => {
    setShow(true);
  };

  const hideOverlay = () => {
    setShow(false);
  };

  return (
    <>
      <CreateTodoForm placeholderText="Enter a task..." />
      <TodoList />
      {show && (
        <Overlay hideOverlay={hideOverlay}>
          <EditTodoForm />
        </Overlay>
      )}
      <button onClick={showOverlay}>Show Overlay</button>
    </>
  );
};
