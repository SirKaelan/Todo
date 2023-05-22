import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UIStateProvider } from "./features/ui";
import { PageDataProvider } from "./pages";
import { TodoProvider } from "./features/todos";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UIStateProvider>
      <PageDataProvider>
        <TodoProvider>
          <App />
        </TodoProvider>
      </PageDataProvider>
    </UIStateProvider>
  </React.StrictMode>
);
