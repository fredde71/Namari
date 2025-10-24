import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NamariSite from "./NamariSite.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NamariSite />
  </React.StrictMode>
);