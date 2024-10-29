import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App from "./fizzbuzzApp";
import MyForm from "./ContolledComponent";
import "./style.css";

createRoot(document.getElementById("root")).render(<MyForm />);
// createRoot(document.getElementById("root")).render(<App />);
// createRoot(document.getElementById("root")).render(<App name="Firman syah" />);
