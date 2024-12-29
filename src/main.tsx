import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import "./font.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={`https://itsjh1242.github.io/boramjunhyeon_map/`}>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
