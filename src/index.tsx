import React from "react";
import ReactDOM from "react-dom";
import App from "@/App";
import createGlobalStyles from "@/styles/global";

createGlobalStyles();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
