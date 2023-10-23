import React from "react";
import ReactDOM from "react-dom/client";
import "./sass-partials/_global.scss";
import App from "./App";
import { UIProvider } from "contexts/ui-context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UIProvider>
        <App />
      </UIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
