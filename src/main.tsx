import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeConfig } from "./config/theme.config";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <ThemeConfig>
      <App />
    </ThemeConfig>
  </React.StrictMode>
);
