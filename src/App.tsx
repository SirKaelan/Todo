import React from "react";
import "./App.css";

import { Home } from "./pages";

const App = (): JSX.Element => {
  return (
    // Might need to change how i grab this class
    <div className="container">
      <Home />
    </div>
  );
};

export default App;
