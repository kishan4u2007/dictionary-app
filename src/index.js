import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Ensure this is correct
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
