import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Debug from "./comps/Debug/Debug";
import "./assets/css/reset.css";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
        <Debug />
    </StrictMode>
);
