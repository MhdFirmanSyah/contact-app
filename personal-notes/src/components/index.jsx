import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./../style/style.css";
import AppNotes from "./AppNotes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppNotes />
  </StrictMode>
);
