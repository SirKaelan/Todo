import React from "react";
import ReactDOM from "react-dom/client";
import "./sass-partials/_global.scss";
import App from "./App";
import { UIStateProvider } from "./features/ui";
import { PageDataProvider } from "./pages";
import { TaskProvider } from "./features/tasks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UIStateProvider>
      <PageDataProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </PageDataProvider>
    </UIStateProvider>
  </React.StrictMode>
);
