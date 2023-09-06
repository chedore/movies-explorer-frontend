import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div style={{ backgroundColor: "#202020" ,minHeight: '100vh'}}>
        <App />
      </div>
    </React.StrictMode>
  </BrowserRouter>
);
