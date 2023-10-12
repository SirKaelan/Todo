import React from "react";
import "./App.css";
import { TaskProvider } from "features/tasks";

import { Tasks } from "./pages";

const App = (): JSX.Element => {
  return (
    // Might need to change how i grab this class
    <div className="container">
      <TaskProvider>
        <Tasks />
      </TaskProvider>
    </div>
  );
};

export default App;
