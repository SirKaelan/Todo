import React from "react";
import "./App.css";
import { CopyTaskProvider } from "features/tasks";

import { Home } from "./pages";

const App = (): JSX.Element => {
  return (
    // Might need to change how i grab this class
    <CopyTaskProvider>
      <div className="container">
        <Home />
      </div>
    </CopyTaskProvider>
  );
};

export default App;
