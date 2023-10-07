import React from "react";
import "./App.css";
import { TaskProvider } from "features/tasks";

import { Home } from "./pages";

const App = (): JSX.Element => {
  return (
    // Might need to change how i grab this class
    <div className="container">
      <TaskProvider>
        <Home />
      </TaskProvider>
    </div>
  );
};

export default App;
