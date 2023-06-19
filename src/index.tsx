import React from "react";
import ReactDOM from "react-dom/client";
import "./sass-partials/_global.scss";
import App from "./App";
import { UIStateProvider } from "./features/ui";
import { PageDataProvider } from "./pages";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <UIStateProvider>
        <PageDataProvider>
          <App />
        </PageDataProvider>
      </UIStateProvider>
    </React.StrictMode>
  </BrowserRouter>
);
