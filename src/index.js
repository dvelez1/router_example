import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// Custom CSS FOR NavBar
import "./styles.css";
// Import for React Router
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/*BrowserRouter --> Used for router */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
