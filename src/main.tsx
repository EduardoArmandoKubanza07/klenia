import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.ts";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
