import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UvIndexProvider } from "./components/UxIndex/UvContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UvIndexProvider>
        <App />
      </UvIndexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
