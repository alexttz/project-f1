import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/orbitron/900.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
